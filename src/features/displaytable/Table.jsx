import PropTypes from 'prop-types'
import TableContent from './TableContent'
import TableHeader from './TableHeader'
function Table(props) {
  Table.propTypes = {
    headers: PropTypes.array,
    list: PropTypes.array,
  }

  return (
    <table>
      <tbody>
        <TableHeader headers={props.headers} />
        <TableContent list={props.list} />
      </tbody>
    </table>
  )
}
export default Table
