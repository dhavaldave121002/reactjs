import React, { useContext } from "react";
import UserContext from "./userContext";

const CompoC=()=>{
  const user=useContext(UserContext);
  // console.log(user);
  return(
    <div>
      <h1>CompoC user profile</h1>
      <p>name:{user.name}</p>
      <p>email:{user.email}</p>
    </div>
  )
}
export default CompoC;