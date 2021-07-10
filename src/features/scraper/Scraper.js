import React, { useEffect, useState } from "react";

function Scraper() {
  const [apiResponse, setapiResponse] = useState([]);
  const [apiList, setapiList] = useState([]);
  const [ebayResponse, setebayResponse] = useState([]);
  const [ebayPrice, setebayPrice] = useState([]);
  const [ebayLink, setebayLink] = useState([]);
  const [pricediffList, setpricediffList] = useState([])
  useEffect(() => {
    const callAPI = () => {
      fetch("http://localhost:9000/crawlerAPI")
        .then((res) => res.text())
        .then((res) => {
          setapiResponse(JSON.parse(res));
        })
        .catch((err) => err);
    };

    const callEbay = () => {
      fetch("http://localhost:9000/ebayAPI")
        .then((res) => res.text())
        .then((res) => {
          setebayResponse(JSON.parse(res));
        })

        .catch((err) => err);
    };

    callAPI();
    callEbay();
  }, []);

  useEffect(() => {
    const setEbay = () => {
      const ebayArr = [];
      const ebayURL = [];
      for (let i = 0; i < ebayResponse.length; i++) {
        if (
          ebayResponse[i].findItemsByKeywordsResponse[0].searchResult[0]
            .item === undefined
        ) {
          ebayArr.push("N/A");
        } else {
          ebayArr.push(
            parseFloat(
              ebayResponse[i].findItemsByKeywordsResponse[0].searchResult[0]
                .item[0].sellingStatus[0].currentPrice[0].__value__
            )
          );
        }
        setebayPrice([...ebayArr]);
      }
      for (let v = 0; v < ebayResponse.length; v++) {
        if (
          ebayResponse[v].findItemsByKeywordsResponse[0].searchResult[0]
            .item === undefined
        ) {
          ebayURL.push("N/A");
        } else {
          ebayURL.push(
            ebayResponse[v].findItemsByKeywordsResponse[0].searchResult[0]
              .item[0].viewItemURL[0]
          );
        }
        
        setebayLink([...ebayURL]);
      }
    };
    setEbay();
  }, [ebayResponse]);

  useEffect(() => {
    const handleApiChange = () => {
      setapiList([...apiResponse]);
    };
    handleApiChange();
  }, [apiResponse]);

  useEffect(() => {
 const tableMath = () => {
  const priceArr = []
  for (let j = 0; j < ebayPrice.length; j++) {
    if (ebayPrice[j] === 'N/A') {
      priceArr.push('N/A')
    } else {
      priceArr.push(parseFloat(apiList[j].price.replace(/[$ ,]/g, "")) - ebayPrice[j])
    };
    setpricediffList([...priceArr])
  }
}
 tableMath();
}, [apiList, ebayPrice]);

  return (
    <div>
      <h1>Current Active Items:</h1>
      <ul></ul>
      <table>
        <tbody>
          <tr>
            <th>Item Name</th>
            <th>Auction Price</th>
            <th>Link</th>
            <th>Ebay Price</th>
            <th>Ebay Link</th>
            <th>Diff</th>
          </tr>
          {apiList.map((item, idx) => {
            return (
              <tr key={item.link}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <a href={item.link}> Link</a>
                </td>
                <td key={idx}>{ebayPrice[idx]}</td>
                <td key={ebayLink}>
                  <a href={ebayLink[idx]}> Link</a>
                </td>
                <td>
                  {pricediffList[idx]}
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
}

export default Scraper;
