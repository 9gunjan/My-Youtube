import React from "react";
import Button from "./Button";

const list = ["All" , "Gaming" , "Cricket" , "Soccer" , "News" , "Cooking" , "Music"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index)=>(
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
