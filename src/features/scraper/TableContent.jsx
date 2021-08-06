import { React, useState, useEffect } from "react";

function TableContent() {
  const [apiResponse, setapiResponse] = useState([]);
  const [apiList, setapiList] = useState([]);
  const [ebayResponse, setebayResponse] = useState([]);
  const [ebayPrice, setebayPrice] = useState([]);
  const [ebayLink, setebayLink] = useState([]);
  const [pricediffList, setpricediffList] = useState([]);

  useEffect(() => {
    const callAPI = () => {
      fetch(process.env.REACT_APP_BACKEND_URL1)
        .then((res) => res.text())
        .then((res) => {
          setapiResponse(JSON.parse(res));
        })
        .catch((err) => err);
    };

    const callEbay = () => {
      fetch(process.env.REACT_APP_BACKEND_URL2)
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
    };
    setEbay();
  }, [ebayResponse]);

  useEffect(() => {
    const setLink = () => {
      const ebayURL = [];
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
    setLink();
  }, [ebayResponse]);

  useEffect(() => {
    const handleApiChange = () => {
      setapiList([...apiResponse]);
    };
    handleApiChange();
  }, [apiResponse]);

  useEffect(() => {
    const tableMath = () => {
      const priceArr = [];
      for (let j = 0; j < ebayPrice.length; j++) {
        if (ebayPrice[j] === "N/A") {
          priceArr.push("N/A");
        } else if (apiList[j].price === undefined) {
          priceArr.push("error");
        } else {
          priceArr.push(
            Math.round(
              ebayPrice[j] - parseFloat(apiList[j].price.replace(/[$ ,]/g, ""))
            )
          );
        }
        setpricediffList([...priceArr]);
      }
    };
    tableMath();
  }, [apiList, ebayPrice]);

  return (
    <tbody>
      {apiList.map((item, idx) => {
        return (
          <tr key={[idx] + "r"}>
            <td key={[idx] + "t"}>{apiList[idx].title}</td>
            <td key={apiList[idx].link}>
              <a
                href={apiList[idx].link}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {apiList[idx].price}
              </a>
            </td>
            <td key={ebayLink}>
              <a
                href={ebayLink[idx]}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                ${ebayPrice[idx]}
              </a>
            </td>
            <td
              key={idx + "pd"}
              style={{
                color:
                  pricediffList[idx] < 0 || pricediffList[idx] === "N/A"
                    ? "red"
                    : "green",
              }}
            >
              ${pricediffList[idx]}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableContent;
