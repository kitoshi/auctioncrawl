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



  callEbay() {
    fetch(
      `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=bluetape&limit=3`,
      {
          headers:
          {
            'Authorization': 'Bearer ' + process.env.REACT_APP_OAUTH_token,
            'Content-Type': 'application/json',
            'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
            //'X-EBAY-C-ENDUSERCTX': 'contextualLocation=country=<2_character_country_code>,zip=<zip_code>,affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId></referenceId>',
          }
      }
    
        
    )
      .then((response) => response.text())
      .then((response) => this.setState({ totalEbayData: response }))
      .catch((err) => err);
  }
 

  componentDidMount() {
    this.callAPI();
    this.callEbay();
  }

  render() {
    const newArr = [...this.state.apiResponse];
    console.log(newArr);
    const renderTable = newArr.map((item) => (
        <tr key={item.link}>
        <th>{item.title}</th>
        <th>{item.price}</th>
        <th><a href={item.link}> Link</a></th>
        </tr>
    ))
    const ebayArr = [];
    for (const item in newArr) {
      this.state.itemList.push(newArr[item].title);
    }
    console.log(ebayArr);

    return (
      <div>
        <h1>Current Active Items:</h1>
        <ul></ul>
        <table>
          <tbody>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Link</th>
            </tr>
            {renderTable}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Scraper;