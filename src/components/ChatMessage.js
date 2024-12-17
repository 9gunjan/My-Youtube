import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow p-2">
      <img
      className="h-8 rounded-full"
        src="https://yt4.ggpht.com/ytc/AIdro_momCzWinqemrHVRkrALpkqOgWMuuCZmQETvZkxuCGOrH4d_knhnFbGxobnamVu-3gWDA=s32-c-k-c0x00ffffff-no-rj"
        alt="user-img"
      />
      <span className="font-bold p-2">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

export default ChatMessage;
