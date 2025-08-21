import React from "react";
import CompoC from "./CompoC";

const CompoB=({user})=>{
  // console.log(user);
  return(
    <div>
      <h1>CompoB</h1>
      {/* <CompoC user={user}/> */}
      <CompoC/>
    </div>
  )
}
export default CompoB;