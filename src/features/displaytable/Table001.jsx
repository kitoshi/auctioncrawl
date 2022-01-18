import React from 'react';
import Table from './Table.jsx';
import { useState, useCallback, useEffect } from 'react';

function federalTable() {
  const tableHeaders = ['Item Name', 'Auction Price', 'Ebay Price', 'Diff'];
  const [ebayResponse, setEbayResponse] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [tableList, setTableList] = useState([]);

  const fetchAPI = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL1);
    const json = await response.json();
    setApiResponse(json[0]['combinedList1'].concat(json[1]['combinedList2']));
    const response2 = await fetch(process.env.REACT_APP_BACKEND_URL2);
    const json2 = await response2.json();
    setEbayResponse(json2);
  }, []);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  function priceDifference(element, index) {
    return Math.round(
      parseFloat(
        element.findItemsByKeywordsResponse[0].searchResult[0].item[0]
          .sellingStatus[0].currentPrice[0].__value__
      ) - parseFloat(apiResponse[index]['price'].replace(/[$ ,]/g, ''))
    );
  }

  useEffect(() => {
    const setTableArray = () => {
      const combinedList = [];
      for (const [index, element] of ebayResponse.entries()) {
        if (
          element.findItemsByKeywordsResponse[0].searchResult[0].item ===
          undefined
        ) {
          combinedList[index] = {
            itemName: apiResponse[index].title,
            itemURL: apiResponse[index].link,
            itemPrice: apiResponse[index].price,
            ebayitemURL: 'N/A',
            ebayitemPrice: 'N/A',
            priceDifference: 'N/A',
          };
        } else {
          combinedList[index] = {
            itemName: apiResponse[index].title,
            itemURL: apiResponse[index].link,
            itemPrice: apiResponse[index].price,
            ebayitemURL:
              element.findItemsByKeywordsResponse[0].searchResult[0].item[0]
                .viewItemURL[0],
            ebayitemPrice: '$' + parseFloat(
              element.findItemsByKeywordsResponse[0].searchResult[0].item[0]
                .sellingStatus[0].currentPrice[0].__value__
            ),
            priceDifference: priceDifference(element, index),
          };
        }
        setTableList([...combinedList]);
      }
    };
    setTableArray();
  }, [apiResponse, ebayResponse]);

  return (
    <div>
      <Table headers={tableHeaders} list={tableList} />
      <br></br>
      <h2 style={{ textAlign: 'center' }}>
        Contact Me: admin@tradingfever.com
      </h2>
    </div>
  );
}

export default federalTable;
