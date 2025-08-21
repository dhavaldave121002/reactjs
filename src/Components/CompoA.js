import React from "react";
import CompoB from "./CompoB";
const CompoA=()=>{
  // const user ={
  //   name:'Dhaval',
  //   email:'dhavaldave@gmail.com'
  // }
  return(
    <div className="max-w-5xl mx-auto">
      <h1>CompoA</h1>
      {/* <CompoB user={user}/> */}
      <CompoB />
    </div>
  )
}
export default CompoA;