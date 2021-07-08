import React from 'react';


class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      apiList: [],
      itemList: [],
      ebayResponse: "",
      ebayList: [],
      ebayPrice: [],
      ebayLink: [],
      fullTable: [],
    };
  }

  callAPI() {
    fetch("http://localhost:9000/crawlerAPI")
      .then((res) => res.text())
      .then((res) => {
        this.setState({ apiResponse: JSON.parse(res) })
        this.setState({
          apiList: [...this.state.apiResponse],
        })
        const newArr = []
        for (const item of this.state.apiList) {
          newArr.push(item.title);
          }
        this.setState({
          itemList: newArr,
          })
      })
      .catch((err) => err);
  }



  callEbay() {
    fetch("http://localhost:9000/ebayAPI")
      .then((res) => res.text())
      .then((res) => {
      this.setState({ ebayResponse: JSON.parse(res) })
      this.setState({
        ebayList: [...this.state.ebayResponse],
      })
      const ebayArr = []
      const ebayURL = []
      for (let i = 0; i < this.state.ebayResponse.length; i++) {
        if (this.state.ebayResponse[i].findItemsByKeywordsResponse[0].searchResult[0].item === undefined) {
          ebayArr.push('N/A')
        } else {
        ebayArr.push(this.state.ebayResponse[i].findItemsByKeywordsResponse[0].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__)
        }
      }
      for (let i = 0; i < this.state.ebayResponse.length; i++) {
        if (this.state.ebayResponse[i].findItemsByKeywordsResponse[0].searchResult[0].item === undefined) {
          ebayURL.push('N/A')
        } else {
          ebayURL.push(this.state.ebayResponse[i].findItemsByKeywordsResponse[0].searchResult[0].item[0].viewItemURL[0])
        }
      }
      this.setState({
        ebayPrice: ebayArr,
        ebayLink: ebayURL
      })
      })
      .catch((err) => err);
}



  componentDidMount() {
    this.callAPI();
    this.callEbay();
  }

 

  render() {
    
    /*const renderAPI = this.state.apiList.map((item) => (
        <tr key={item.link}>
        <th>{item.title}</th>
        <th>{item.price}</th>
        <th><a href={item.link}> Link</a></th>
        </tr>
    ))
    const renderEbay = this.state.ebayPrice.map((item) => (
      <tr key={item.index}>
      <th>{item}</th>
      </tr>
  ))*/
  const renderTable = this.state.apiList.map((item, idx)=> {
    return (
      <tr key={item.link}>
            <th>{item.title}</th>
        <th>{item.price}</th>
        <th><a href={item.link}> Link</a></th>
            <td key={idx}>{this.state.ebayPrice[idx]}</td>
            <td key={this.state.ebayLink}><a href={this.state.ebayLink[idx]}> Link</a></td>
        </tr>
    )
  })

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
            {renderTable}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Scraper;