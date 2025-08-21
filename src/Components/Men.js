import React, { useState } from "react";
import Accordian from "./Accordian";

const Men = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Filter Option:</h1>
      {["Brands", "Mens", "GEnder", "Kids"].map((title, index) => {
        return <Accordian key={index} title={title} open={index === open ? true:false} setOpen={()=>setOpen(index)} />;
      })}

      {/* <Accordian title="Brands"/>
      <Accordian title="Mens"/>
      <Accordian title="Gender"/>
      <Accordian title="Kids"/> */}
    </div>
  );
};
export default Men;
