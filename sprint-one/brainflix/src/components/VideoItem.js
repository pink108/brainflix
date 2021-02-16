import React from 'react'
import VideoDetails from './VideoDetails';

function VideoItem(props) {
    console.log(props);
    return (
            <li key={props.id}
            onClick={() => {
              props.setNowPlayingVideo(props.id);
            }}
            className="videolist__item">
                    <img className="videolist__image" src={props.image} alt="video poster image"/>
                      <div className="videolist__group">
                        <p className="videolist__title">{props.title}</p>
                        <p className="videolist__channelname">{props.channel}</p>    
                      </div>             
                </li>
    )
}

export default VideoItem
