import React, { useState } from "react";
import Listitem from "./Listitem";

const Accordian = ({title,open,setOpen}) => {
  const showItem=()=>{
    setOpen();
  }
  return (
    <div className="my-5 w-64 shadow-md border border-gray-200 px-4 py-2">
      <div className="flex justify-between ">
        <h1>{title}</h1>
        <button className="bg-black text-white px-2 rounded-md" onClick={showItem}>Show</button>
      </div>
      {
        open && <Listitem/>
      }
    </div>
  );
};
export default Accordian;
