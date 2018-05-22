import React, { Component } from 'react';

class Filter extends Component {

  // Returns a list of show types (How can we use this for a filter?)
  listOfShowTypes = () => {
    return this.props.shows.map((s)=> {
      return s.type
    }).unique()
  }


  render = () => {
    return (
      <div className="filter">
        <input type = "text" placeholder = "Search by show type" onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Filter;



Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr;
}
