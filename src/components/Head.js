import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  //youtube search api call
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //console.log(searchQuery);
    //make an api call after every key press but if the difference between 2 api calls is less than 200 ms then decline the api call(debouncing)
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        getSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    //update to cache

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer "
          alt="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <a href="/">
          <img
            className="h-12 w-52 mx-2 "
            alt="youtube logo"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-400 w-1/2 p-2 rounded-l-full px-5 "></input>
          <button className=" border border-gray-400 bg-slate-200 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[31.5rem] shadow-lg rounded-2xl border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user logo"
          src="https://freesvg.org/img/abstract-user-flat-3.png"
        />
      </div>
    </div>
  );
};

export default Head;
