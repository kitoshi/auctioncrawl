import React from 'react'
import Table from '../features/scraper/Table.jsx'
import TableContent from "../features/scraper/TableContent.jsx";

const tableHeaders = [
    'Item Name',
    'Auction Price',
    'Link',
    'Ebay Price',
    'Ebay Link',
    'Diff'
  ];

class Homepage extends React.Component{
    render() {
        return (
        <div>
            <Table 
            headers={tableHeaders}
            minCellWidth={120}
            tableContent={<TableContent />}/>
            Contact Me: kitoshi.charlton@gmail.com
        </div>
        )
    }
}

export default Homepage;