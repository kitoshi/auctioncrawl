import React from 'react'
import Table from '../features/scraper/Table.jsx'
import TableContent from "../features/scraper/TableContent.jsx";

const tableHeaders = [
    'Item Name',
    'Auction Price',
    'Ebay Price',
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
            <br></br>
            <h2 style={{textAlign: "center"}}>Contact Me: kitoshi.charlton@gmail.com</h2>
        </div>
        )
    }
}

export default Homepage;