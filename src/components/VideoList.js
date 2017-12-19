import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div className="col-sm-5">
      <ul className="list-unstyled">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
