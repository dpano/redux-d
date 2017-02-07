import React from 'react';

const VideoDetail = ({video}) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}` ;
  return(
    <div className="video-detauk col-md-8">
      <div className="enbed-responsive embed-responsive-16by9">
        <iframe src="{url}" className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
