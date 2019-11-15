import React from 'react';
import './App.css';
import Stock from './components/stock';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1> Invest Buddy</h1>
                <Stock
                    name={"Apple"}
                    advice={"Buy"}
                />
            </div>


        )
    }
}


export default App;
