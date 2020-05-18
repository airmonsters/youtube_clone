import React from "react";
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';
const VideoList= (props)=>{
  const listOfVides = props.videos.map((video, index)=><VideoItem onVideoSelect ={props.onVideoSelect} key={index} video={video}/>)
  return (
    <Grid container spacing={10}>
      {listOfVides}
    </Grid>
  );
}

export default VideoList;
