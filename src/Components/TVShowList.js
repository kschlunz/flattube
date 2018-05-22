import React, { Component } from 'react';
import TVShow from './TVShow'

class TVShowList extends Component {


  render() {
    const TVShows = this.props.shows.map( show => { return ( < TVShow show={show} handleClick={this.handleClick}></TVShow> ) }  )
    return (
      <div className="tvShowList">
        {TVShows}
      </div>
    );
  }

}

export default TVShowList;
