import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);//subscribing  to the store

  if(!isMenuOpen) return null;//early return pattern

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to="/"><li>🏠 Home</li></Link>
        <li>🎞️ Shorts</li>
        <li>📹 Videos</li>
        <li>📺 Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>💿 Movies</li>
        <li>🏆 Sports</li>
        <li>👾 Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>🔥 Trending</li>
        <li>🛒 Shopping</li>
        <li>🎵 Music</li>
        <li>📰 News</li>
        <li>👗 Fashion & Beauty</li>
        <li>💡 Courses</li>
        <li>📡 Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
