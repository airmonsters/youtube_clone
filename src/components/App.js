import React from 'react';

import {Grid} from '@material-ui/core';
import youtube from '../api/youtube';
import SearchBar from '../components/SearchBar';
import VideoDeatil from '../components/VideoDetail';
import VideoList from '../components/VideoList';
import VideItem from '../components/VideoItem';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      videos: [],
      selectedVideo: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  async handleSubmit(searchTerm){
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "put your own google API key here",
        q: searchTerm,
      },
    });
    // console.log(response)
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }

  onVideoSelect=(video)=>{
    this.setState({selectedVideo: video})
  }


  componentDidMount(){
    this.handleSubmit("react tutoral");
  }

  render(){
    const {selectedVideo, videos} = this.state;
      return (
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDeatil video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos = {videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
  }
}

export default App;