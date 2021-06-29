import React from 'react';

class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      itemList: [],
      totalEbayData: [],
    };
  }

  callAPI() {
    fetch("http://localhost:9000/crawlerAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: JSON.parse(res) }))
      .catch((err) => err);
  }



  /*callEbay() {
    fetch(
      "https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=bluetape" +
        "&limit=3"
    )
      .then((response) => response.text())
      .then((response) => this.setState({ totalEbayData: response }))
      .catch((err) => err);
  }*/
  //need ebay credentials to call api

  componentDidMount() {
    this.callAPI();
   // this.callEbay();
  }

  render() {
    const newArr = [...this.state.apiResponse];
    console.log(newArr);
    const renderTable = newArr.map((item) => (
        <tr>
        <th key={item.link}>{item.title}</th>
        <th>{item.price}</th>
        <th><a href={item.link}> Link</a></th>
        </tr>
    ))
    const ebayArr = [];
    for (const item in newArr) {
      ebayArr.push(newArr[item].title);
    }
    console.log(ebayArr);

    return (
      <div>
        <h1>Current Active Items:</h1>
        <ul></ul>
        <table>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Link</th>
            </tr>
            {renderTable}
        </table>
      </div>
    );
  }
}

export default Scraper;