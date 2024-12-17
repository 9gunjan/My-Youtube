import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomNamesForComments,
  makeRandomMessage,
} from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API POLLING

      dispatch(
        addMessage({
          name: generateRandomNamesForComments(),
          message: makeRandomMessage(30),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-hidden overflow-y-scroll flex flex-col-reverse">
        {
          //disclaimer: don't use index as keys - abhi kuch nahi hai to isliye use kiya hai
          chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="w-full p-2 ml-2 border border-black  "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Gunjan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}>
        <input
          className="w-96 bg-gray-300 rounded-lg p-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 rounded-sm font-bold bg-green-200">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
