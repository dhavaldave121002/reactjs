import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import {Productcard} from "./Components/Productcard";



// Product list data


// // Function definitions
// const fn = () => true; // You can control rendering logic here
// const fun2 = () => true;

// // Component definitions
// const Heading1 = () => <h1 id="heading1">Hello world from Heading1</h1>;
// const Heading2 = () => <h1 id="heading2">Hello world from Heading2</h1>;

// // Dynamic value
// const num = 3;

// // Main component using JSX
// const MainContainer = () => {
//   return (
//     <div id="maincontainer2">
//       <div id="container1">
//         <h1>heading1</h1>
//         <h2>heading2</h2>
//       </div>

//       <div id="container2">
//         <h1>heading{num}</h1> {/* This will render literally "heading3" */}
//         <Heading1 />
//         <Heading2 />
//         <h1 className="Count">{1234 + 5678}</h1>

//         {/* Conditional rendering */}
//         {fn() && <p>Function 1 was true</p>}
//         {fun2() && <p>Function 2 was true</p>}
//       </div>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Navbar />
      <Productcard />
    </div>
  );
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
