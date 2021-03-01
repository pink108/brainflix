const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const fs = require('fs');

// load videoDetails json file using the file system module `fs`
function loadVideoDetailsData(){
    const logData = fs.readFileSync('./data/video-details.json', 'utf8');   
    return logData; 
}
loadVideoDetailsData();

// //get videos route
router.get("/", (req, res) => {
    console.log("get videos");
    const videos = JSON.parse(loadVideoDetailsData());
    const mappedVideos = videos.map((video) => {
        return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
        };
    });
        // res.json(videos);
        res.json(mappedVideos); // return a response containing the videos json data
    });

// get single video details
router.get("/:id", (req, res) => {
    // console.log('req.params', req.params); // used to get id from api call
    const videos = JSON.parse(loadVideoDetailsData()); // JSON.parse converts string to object
    const foundVideoIndex = videos.findIndex((video) => {
    return video.id === req.params.id;
    });
    console.log('foundVideoIndex', foundVideoIndex); // find index of video using id
    res.json(videos[foundVideoIndex]);
});


// upload new video
router.post("/", (req, res) => {
    //  console.log("req.body", req.body);
    if (req.body.title === '' && req.body.description === '') {
        res.status(422).send('please enter a title and description');
    } 
    else {
        const videos = JSON.parse(loadVideoDetailsData());
        const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        image: 'http://localhost:5000/Upload-video-preview.jpg',
        comments:[],
        timestamp: Date.now(),
        channel: "Pink Channel",
        views: "1,000,000",
        likes: "100,000",
        duration: "4:00",
        video: "  ",
        };
        videos.push(newVideo);
        fs.writeFileSync('./data/video-details.json', JSON.stringify(videos));
        
        //return response
        res.json({
        message: "posted to videos endpoint pink  testing",
        newVideo,
        });
    }
});
    
module.exports = router;
    