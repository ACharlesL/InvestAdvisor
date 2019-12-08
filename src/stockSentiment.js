import React from 'react'

class Stock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      price: null,
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount () {
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
      // .then(data => {
      //   // // Work with JSON data here
      //   let testValue = ''
      //   console.log(data.price.shortName)
      //   testValue = data.price.shortName
      //   this.title = testValue
      //
      //   this.price = data.price.regularMarketPreviousClose
      //
      //   // UserStock.title = data.price.shortName
      // })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const {title, price } = this.state;
    return <di>
      <h1>{title}</h1>
      <h3>{price}</h3>
      <p>sentiment</p>
      <h2>sell</h2>

    </di>

  }

}

export default Stock