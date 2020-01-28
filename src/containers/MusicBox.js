import React from 'react';
import { render } from '@testing-library/react';
import SongSelect from '../components /SongSelect';


class MusicBox extends React.Component{

constructor(props){
    super(props);
    this.state = {
        songs: []
    };

}











  componentDidMount(){
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

      fetch(url)
      .then(res => res.json())
      .then(data => this.setState({songs: data.feed.entry}))
      .catch(err => console.error);

  }  











render(){
    return (
    <div>
    <h2> Song Titles </h2>
    <SongSelect songs={this.state.songs} />
    </div> 

    );
    
}




}

export default MusicBox



