import React from 'react';

class Scraper extends React.Component{

constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/crawlerAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: JSON.parse(res) }))
        .catch(err => err)
}

componentWillMount() {
    this.callAPI();
}





render () {
   /* const orderedArr = this.state.apiResponse.split(',')
    console.log(orderedArr)
    const renderTable = orderedArr.map((item) => <li key={item.title}>{item.title}{item.price}</li>)
    console.log(renderTable)
    */
   
   const newArr = [...this.state.apiResponse]
   console.log(newArr)
   const renderTable = newArr.map((item) => <li key={item.link}>{item.title}{item.price}<a href={item.link}> Link</a></li>)
  // const renderActive = this.state.apiResponse.map((item, index) =>
    

    return (
      <div>
        <h1>Current Active Items:</h1>
        <ul>{renderTable}</ul>
      </div>
    );
}

}

export default Scraper;