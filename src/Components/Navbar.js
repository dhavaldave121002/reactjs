import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

const Navbar = () => {
  const[btnName,setBtnName]=useState("Light")
  const user=useContext(UserContext);
  // console.log("Button clicked");
  return (
    <div className="navbar flex justify-between px-10 py-5 shadow-md">
      <h1 className="font-bold text-2xl">AJIO</h1>
      <ul className="navlinks flex justify-around w-[60%]">
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kid">Kids</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about">{user.name}</Link></li>
        <li>Cart</li>
        <button className="bg-amber-300 px-6 py-1 rounded-sm text-white" onClick={() => {
          
          btnName==="Light"?setBtnName("Dark"):setBtnName("Light")
        }
        }>{btnName}</button>
      </ul>
    </div>
  );
};
// const styled={
//   "backgroundColor":"red",
//   "color":"white",
//   "margin":"-8px"
// }
export default Navbar;