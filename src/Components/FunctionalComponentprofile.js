import { useState } from "react";

const FunctionalProfile=(props)=>{

  const {name,age,address,gender,email,mobile}=props;
  const [count,setCount]=useState(0)
  // console.log(props);

  return(
    <div style={{"color":"red","border":"1px solid black","padding":"10px","margin":"10px"}}>
      <h1>Functional Profile</h1>
      <h2>Name:{name}</h2>
      <h2>Age:{age}</h2>
      <h2>Address:{address}</h2>
      <h2>Gender:{gender}</h2>
      <h2>email:{email}</h2>
      <h2>Mobile No.:{mobile}</h2>
      <h1>Count - {count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Click Me</button>
    </div>
  )
}
export default FunctionalProfile;