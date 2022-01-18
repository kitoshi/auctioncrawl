import PropTypes from 'prop-types'

function TableContent(props) {
  TableContent.propTypes = {
    list: PropTypes.array,
  }
  return props.list.map((item, idx) => {
    return (
      <tr key={idx}>
        <td>{item.itemName}</td>
        <td>
          <a href={item.itemURL}>{item.itemPrice}</a>
        </td>
        <td>
          <a href={item.ebayitemURL}>{item.ebayitemPrice}</a>
        </td>
        <td>{item.priceDifference}</td>
      </tr>
    )
  })
}
export default TableContent
