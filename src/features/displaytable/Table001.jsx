/*import React from 'react';
import Table from './Table.jsx';
import { useState, useCallback, useEffect } from 'react';

const tableHeaders = ['Item Name', 'Auction Price', 'Ebay Price', 'Diff'];
const [ebayResponse, setEbayResponse] = useState([]);
const [apiResponse, setApiResponse] = useState([]);
//const [tableList, setTableList] = useState([]);

const fetchAPI = useCallback(async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL1);
  const json = await response.json();
  setApiResponse([json][0]['combinedList1'].concat([json][1]['combinedList2']));
  const response2 = await fetch(process.env.REACT_APP_BACKEND_URL2);
  const json2 = await response2.json();
  setEbayResponse(json2);
}, []);

useEffect(() => {
  fetchAPI();
}, [fetchAPI]);

console.log(ebayResponse, apiResponse);
/*
useEffect(() => {
  const handleTableChange = () => {
    const combinedList = [];
    for (const [index, element] of ebayResponse) {
      combinedList.push(
        parseFloat(
          element.findItemsByKeywordsResponse[0].searchResult[0].item[0]
            .sellingStatus[0].currentPrice[0].__value__
        ),
        element.findItemsByKeywordsResponse[0].searchResult[0].item[0]
          .viewItemURL[0],
        Math.round(
          parseFloat(
            element.findItemsByKeywordsResponse[0].searchResult[0].item[0]
              .sellingStatus[0].currentPrice[0].__value__
          ) - parseFloat(apiResponse[index]['price'].replace(/[$ ,]/g, ''))
        )
      );
      setTableList([...combinedList]);
    }
  };
  handleTableChange();
}, [apiResponse]);

function fedTable() {
  return (
    <div>
      <Table headers={tableHeaders} />
      <br></br>
      <h2 style={{ textAlign: 'center' }}>
        Contact Me: admin@tradingfever.com
      </h2>
    </div>
  );
}

export default fedTable;*/
