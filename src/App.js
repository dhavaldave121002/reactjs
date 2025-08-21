import React, { useEffect, lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import { Productcard } from "./Components/Productcard";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kid from "./Components/Kid";
import Error from "./Components/Error";
import ProductDetail from "./Components/ProductDetails";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"; 
import About from "./Components/About";
import Skeleton from "./Components/Skeleton";
// import Grocery from "./Components/grocery";


const Grocery = lazy(() => import("./Components/grocery"));
// Product list data

// Function definitions
// const fn = () => true; // You can control rendering logic here
// const fun2 = () => true;

// Component definitions
// const Heading1 = () => <h1 id="heading1">Hello world from Heading1</h1>;
// const Heading2 = () => <h1 id="heading2">Hello world from Heading2</h1>;

// Dynamic value
// const num = 3;

// Main component using JSX
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
      <Outlet/>
    </div>
  );
};


const appRouter = createBrowserRouter([ // Fixed import name here
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Productcard/>
      },
      {
        path: "/kid",
        element: <Kid/>
      },
      {
        path: "/men",
        element: <Men/>
      },
      {
        path: "/women",
        element: <Women/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Skeleton/>}><Grocery/></Suspense>
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      }
    ],
    errorElement: <Error/>
  }
]);

// Ensure your root element exists in HTML and uses React 18 syntax for createRoot
const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure this is correct
root.render(<RouterProvider router={appRouter}/>);
