import { useState } from "react";

const Navbar = () => {
  const[btnName,setBtnName]=useState("Light")
  // console.log("Button clicked");
  return (
    <div className="navbar" style={styled}>
      <h1>Logo</h1>
      <ul className="navlinks">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Cart</li>
        <button onClick={() => {
          
          btnName==="Light"?setBtnName("Dark"):setBtnName("Light")
        }
        }>{btnName}</button>
      </ul>
    </div>
  );
};
const styled={
  "backgroundColor":"red",
  "color":"white",
  "margin":"-8px"
}
export default Navbar;