import React from 'react';
import {Card, Col} from 'react-materialize'
import Details from './Details'
import Adapter from '../Adapter'



class TVShow extends React.Component {

    state = {
      episodes: [],
      isClicked: false
    }
  componentDidMount(){
    Adapter.getShowEpisodes(this.props.show.id)
    .then(res => this.setState({
      episodes: res
    }))
  }

  handleClick = (event) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }


  render(){
    const {name, summary} = this.props.show
    const details = this.state.episodes.map((episode) =>  <Details episode={episode} />)
    return (
      <Col m={6} s={12}>
        <Card className='blue-grey darken-1'
          textClassName='white-text'
          title={name} onClick={this.handleClick}
        >
          {summary}
          {this.state.isClicked ? details: null}
        </Card>
      </Col>
    );
  }

}

export default TVShow;
