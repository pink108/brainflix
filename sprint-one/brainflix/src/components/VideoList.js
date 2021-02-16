import React from 'react';
import VideoItem from './VideoItem';

function VideoList(props) {
    return (
        <ul id="videolist" className= "videolist">
              <div className="videolist__container">
              <p className="videolist__heading">NEXT VIDEO</p>
              {props.videos
              .filter((video) => video.id !== props.currentVideoID)
              .map((video) => (                
                <VideoItem 
                id = {video.id}
                temp={video.id}
                image={video.image} 
                title={video.title} 
                channel={video.channel}
                videos={props.videos}
                setNowPlayingVideo={props.setNowPlayingVideo}/>               
                ))}
              </div>        
      </ul>
    )
}

export default VideoList;
