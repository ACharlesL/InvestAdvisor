import React, {Component} from 'react';
import './App.css';
import Stock from './stock'

class App extends Component {
 constructor(props){
   super(props);

   this.state = {
       data : {
           text: 'front end stock',
           title: 'front end to api '
       },
     historicData: [],
   }
 }

 componentDidMount() {
     fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data?frequency=1d&filter=history&period1=1546448400&period2=1562086800&symbol=AAPL', {
       'method': 'GET',
       'headers': {
         'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
         'x-rapidapi-key': '833717da8emshdb6cce42afdd1e9p1b5b60jsn3566179e8af4'
       }
     })
         .then(response => response.json())
         .then(data => this.setState({
               historicData: data.prices,
             }))
         .catch(err => {
           console.log(err)
         })
    this.postStockHistoricalData()
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


  render() {

   const {historicData} = this.state;
   console.log(historicData);

   return (

       <div className="App">
         <header className="App-header">
           <p>
             Invest Buddy
           </p>

         </header>
         <body>
         <Stock historicData={historicData}>
         </Stock>
         </body>
       </div>
   );
 }
}

export default App;
