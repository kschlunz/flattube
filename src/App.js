import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {

  state = {
    shows: [],
    textTyped: ""
  }

  componentDidMount = () => {

    Adapter.getShows().then(res => {this.setState({
      shows: res
    })
  })

  }

  handleChange = (e) => {
    this.setState({textTyped: e.target.value})
  }


  render = () => {
    let allShows = this.state.shows
    allShows = allShows.filter( (show) => {return show.type.toLowerCase().includes(this.state.textTyped.toLowerCase())})
    return (
      <div className="App">
        <TVShowList shows = {allShows} />
        <Filter handleChange = {this.handleChange} />
      </div>
    );
  }
}

export default App;
