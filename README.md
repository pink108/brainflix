brainflix project:

Project Overview
You have been approached by an entrepreneur to build out a prototype for a new video streaming platform called BrainFlix. The entrepreneur has meetings lined up for funding with several VCs and needs the prototype built within the next three weeks. BrainFlix’s Creative Director has provided you with a package and mockup of how they envision the final product. There is also a separate team that is currently working on a backend API needed to integrate with the front-end, but for the time being the static components need to be put together.

It will be your job to create a functioning and responsive app prototype from the project designs provided.

Tools & Resources
Download the Sprint 1 Design Package which includes the required assets, style guide, spec sheets, and mockup.
Use create-react-app to allow you to quickly create a React starter project.
Use the sass npm package to allow you to compile .scss files in the project
npm can be used to install JavaScript libraries that will help you complete your project.
Functional Requirements
The ”Next Video” sidebar must not contain the current video being displayed.
Components should render using dynamic data, not hardcoded HTML (eg. comments, current video, and video-list sections).
Side videos should be clickable and upon selecting a video you should update the Main Video section to display the details and comments of a new video. Think of which React concept you could use to update the UI based on user interaction.
Visual Design Requirements
The site must be responsive at and between breakpoints, and should closely resemble the mockups in the design package.
Implementation Requirements
Your project must follow the proper folder structure and naming convention outlined in the project guidelines and Sprint 1 Folder Structure Diagram.
The site must make use of the provided assets.
The site must be composed of multiple React components.
The site must use the <video> tag for the video player.
Although the <video> tag will not be functional for this sprint, all visual elements of the video player must exist on the deliverable without functionality.
Use the poster attribute to have the video player resemble the mockup.
Video controls should be the default <video> controls. Don’t worry if the default styling doesn’t match the mockups, re-styling them will be part of the later sprint.
Using the data files from the assets folder, you must use state to hold the data and pass it down as props to generate side-videos and main video content including comments.
The main video should be included in the side-videos array (with the same object keys as other side-video objects) and filtered out of the side-videos section programmatically.
The main-video object, with extended properties, should be a separate piece of state
The comments-section form doesn’t need to be functional. You don’t need to be able to post new comments for this Sprint, but the comments still need to be rendered dynamically (data coming from comments property of the main video object stored in state).
You must use SASS for your styling and take advantage of SASS variables, plus any other SASS features that can help improve your code.
Class naming for your styling must use BEM.
Layout of the site must use Flexbox.
