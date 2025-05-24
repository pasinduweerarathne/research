import React from 'react';
import YouTube from 'react-youtube';

export const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: '390', 
    width: '680',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};