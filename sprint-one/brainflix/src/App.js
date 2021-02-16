import React from "react";
import logo from "./assets/logos/Logo-brainflix.svg";
import search from "./assets/icons/Icon-search.svg";
import upload from "./assets/icons/Icon-upload.svg";
import user from "./assets/images/Mohan-muruge.jpg";
import avatar from "./assets/images/User-image.png";
import views from "./assets/icons/Icon-views.svg";
import likes from "./assets/icons/Icon-likes.svg";
import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import CommentsList from "./components/CommentsList";
import VideoList from "./components/VideoList";
// import './App.css';

//import video data to use in state object
import videoDetailsData from "./data/video-details.json";
import videosData from "./data/videos.json";
import VideoDetails from "./components/VideoDetails";
import CommentForm from "./components/CommentForm";


class App extends React.Component{
  //state object
  state = {
    nowPlayingID: "1af0jruup5gu",
    nowPlayingIndex: 0,
    videos: videosData,
    videoDetails: videoDetailsData
  }

  setNowPlayingVideo = (id) => {
    // search array of video objects stored in state for matching ID, use the index to update state: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    const foundIndex = this.state.videos.findIndex((video) => video.id === id);

    // set current video to the id from videoList click event and also set the index of the current video
    this.setState({
      nowPlayingID: id,
      nowPlayingIndex: foundIndex,
    });
  };

  render() {
    return (
      <div className="App">
        <Header logo={logo} search={search} upload={upload} user={user}/>
        <VideoPlayer posterImage={this.state.videoDetails[this.state.nowPlayingIndex].image} />
      
        <main className="main-section">
          <div className="main-section__left">
            <VideoDetails 
            views={views} 
            likes={likes} 
            videoDetailsData={this.state.videoDetails[this.state.nowPlayingIndex]}
          />

            {/* Join the Conversation */}
            <CommentForm user={user} CommentListDetails={this.state.videoDetails[this.state.nowPlayingIndex]}/>

            <CommentsList
            // videos={this.state.videos}
            avatar={avatar}
            videoData={this.state.videoDetails[this.state.nowPlayingIndex]}
            />
          </div>

          <aside className="main-section__right">
            <VideoList
            videos={this.state.videos}
            currentVideoID={this.state.nowPlayingID}
            setNowPlayingVideo={this.setNowPlayingVideo}
            />
          </aside>           
        </main>

        
      </div>
    );
  }

}

export default App;
