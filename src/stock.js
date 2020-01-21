import React from 'react'

class Stock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      price: null,
      stockDate: this.props.historicData.date,
      stockClose: this.props.historicData.close,
      data : {
        text: 'front end stock',
        title: 'front end to api '
      }
    }
  }


  componentDidMount () {
    this.getStockDetails();
    // this.postStockHistoricalData();
    this.getStockHistoricalData();
  }



  getStockDetails () {
    fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=AAPL', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '833717da8emshdb6cce42afdd1e9p1b5b60jsn3566179e8af4'
      }
    })
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                title: result.price.shortName,
                price: result.price.regularMarketPreviousClose.fmt
              })
              console.log("test")
            }
        )
        .catch(err => {
          console.log(err)
        })
  }

  postStockHistoricalData (){
    console.log("in historical data")
    fetch(' https://investbuddyapi.herokuapp.com/noauthresource', {
      'method': 'POST',
      'Access-Control-Allow-Origin': '*',
      'headers': {
        'Content-Type': 'application/json',
      },
      body: this.state.data
    })
        .then(res => res.json())
        .then(data => console.log('Success:', data))
        .catch((error) => {
          console.error('Error:', error);
        })
  }

  getStockHistoricalData (){
    console.log("in historical data")
    fetch(' https://investbuddyapi.herokuapp.com/stocks', {
      'method': 'GET',
      'headers': {
      //  'Content-Type': 'application/json',
      },

    })
        .then(res => res.json())
        .then(data => console.log('Success:', data))
        .catch((error) => {
          console.error('Error:', error);
        })
  }

  render() {

    const {title, price } = this.state;
    return <di>
      <h1>{title}</h1>
      <h3>{price}</h3>
      <p>sentiment</p>
      <h2>sell</h2>
      <ul>
        {this.props.historicData.map(hit =>
            <li key={hit.date}>
              <div> {hit.date}</div>
              <a href={hit}>{hit.close}</a>
            </li>
        )}
      </ul>
    </di>
  }
}

export default Stock