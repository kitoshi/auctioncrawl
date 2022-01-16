import React, { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Table = ({ headers, minCellWidth, tableContent }) => {
  Table.propTypes = {
    headers: PropTypes.array,
    minCellWidth: PropTypes.number,
    tableContent: PropTypes.element,
  };
  const [tableHeight, setTableHeight] = useState('auto');
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const columns = createHeaders(headers);

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
        ' '
      )}`;
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  const resetTableCells = () => {
    tableElement.current.style.gridTemplateColumns = '';
  };

  return (
    <div
      className='container'
      style={{
        backgroundColor: 'blue',
        padding: '20px',
        background: 'linear-gradient(90deg, #b1ef8f 0%, #517ea5 100%) repeat-y',
      }}
    >
      <div className='table-wrapper'>
        <h1 style={{ textAlign: 'center' }}>Current Active Items:</h1>
        <ul></ul>
        <table className='resizeable-table' ref={tableElement}>
          <thead>
            <tr>
              {columns.map(({ ref, text }, i) => (
                <th ref={ref} key={text}>
                  <span>{text}</span>
                  <div
                    style={{ height: tableHeight }}
                    onMouseDown={() => mouseDown(i)}
                    className={`resize-handle ${
                      activeIndex === i ? 'active' : 'idle'
                    }`}
                  />
                </th>
              ))}
            </tr>
          </thead>
          {tableContent}
        </table>
      </div>
      <button onClick={resetTableCells} style={{ float: 'right' }}>
        Reset
      </button>
    </div>
  );
};

export default Table;
