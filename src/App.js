import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import BeerList from "./components/BeerList";

class App extends Component {
  state ={
    beerList: [],
  };

  getBeers = async (e) => {  
    e.preventDefault();
    const api_call = await fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=80`);
    const data = await api_call.json();
    console.log(data);
    this.setState({ beerList: data});
    console.log(this.state.beerList);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header_container">
            <h1 className="App-title">World<span>Best</span>Beer</h1>
          </div>
        </header>
        <Form getBeers={this.getBeers} />
        <BeerList beerList={this.state.beerList}/>
      </div>
    );
  }
}

export default App;