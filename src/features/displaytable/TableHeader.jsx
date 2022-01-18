import PropTypes from 'prop-types';

function TableHeader(props) {
  TableHeader.propTypes = {
    headers: PropTypes.array,
  };
  return props.headers.map((text) => (
    <tr key={text}>
      <th>{text}</th>
    </tr>
  ));
}
export default TableHeader;
