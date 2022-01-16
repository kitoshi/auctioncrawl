import PropTypes from 'prop-types';

function Table(props) {
  Table.propTypes = {
    headers: PropTypes.array,
  };
  const tableHeaders = props.headers.map((text) => <th key={text}>{text}</th>);
  return (
    <table>
      <tbody>
        <tr>{tableHeaders}</tr>
      </tbody>
    </table>
  );
}
export default Table;
