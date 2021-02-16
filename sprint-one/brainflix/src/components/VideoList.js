import React from 'react'
import VideoItem from './VideoItem'

function VideoList(props) {
    // const {keyID }= props.videos.id;
    return (
        <ul id="videolist" className= "videolist">
            {/* <section className="videolist"> */}
              <div className="videolist__container">
              <p className="videolist__heading">NEXT VIDEO</p>
      
              {props.videos
              .filter((video) => video.id !== props.currentVideoID)
              .map((video) => (
                
                // <li className="videolist__item">
                //     <img className="videolist__image" src={video.image} alt="video poster image"/>
                //       <div className="videolist__group">
                //         <p className="videolist__title">{video.title}</p>
                //         <p className="videolist__channelname">{video.channel}</p>    
                //       </div>             
                // </li>

                <VideoItem 
                id = {video.id}
                key={video.id}
                image={video.image} 
                title={video.title} 
                channel={video.channel}
                videos={props.videos}
                setNowPlayingVideo={props.setNowPlayingVideo}
                />
                
                
                ))}
              </div>        
        {/* </section> */}
      </ul>
    )
}

export default VideoList
