import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.medium.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list_video media mb-3">
      <img className="mr-3" src={imageUrl} alt="" />
      <div className="media-body">
        <h5 className="mt-2 mb-1">{video.snippet.title}</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio
      </div>
    </li>
  );
};

export default VideoListItem;
