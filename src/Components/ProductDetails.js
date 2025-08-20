import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import usegetSingleproduct from "../hooks/usegetSingleproduct";



const ProductDetail=()=>{
  const {id}=useParams();
  const singleData= usegetSingleproduct(id);
//  const [singleData,setSingleData]= useState(null)
//  const {id}=useParams();
  // console.log(id);
  // useEffect(()=>{
  //   fetchData();
  // },[])
  // const fetchData=async()=>{
  //   const data=await fetch(`https://fakestoreapi.com/products/${id}`);
  //   const dt=await data.json();
  //   setSingleData(dt);
  // }
  if(singleData===null){
    return <Skeleton/>
  }
  const {image,title,price,rating}=singleData;
  return(
    <div className="product">
      <img
        src={image}
        alt="img"
      />
      {/* <h1>{props.title}</h1>
      <p>Price: {props.price}</p>
      <p>Rating: {props.rating}</p> */}
      <h1>{title}</h1>
      <p>Price: {price}</p>
      <p>Rating: {rating.rate}</p>
      <p>Rating Count: {rating.count}</p>
      <p>Description: {singleData.description}</p>
    </div>
  )
}
export default ProductDetail;