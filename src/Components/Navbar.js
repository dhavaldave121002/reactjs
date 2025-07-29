import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const[btnName,setBtnName]=useState("Light")
  // console.log("Button clicked");
  return (
    <div className="navbar" style={styled}>
      <h1>Logo</h1>
      <ul className="navlinks">
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kid">Kids</Link></li>
        <li><Link to="/about">About</Link></li>
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