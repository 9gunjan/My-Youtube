import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return null; // Optionally render a fallback component or return null if data is missing
  }
  const { snippet , statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img  className="rounded-lg  " alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
