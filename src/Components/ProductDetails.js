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
    <div className="max-w-5xl mx-auto mt-10">
    <div className="border border-gray-600 p-5 rounded-md">
      <img className="w-32 "
        src={image}
        alt="img"
      />
      {/* <h1>{props.title}</h1>
      <p>Price: {props.price}</p>
      <p>Rating: {props.rating}</p> */}
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="font-bold text-gray-700">Price: {price}</p>
      <p className="font-bold text-gray-700">Rating: {rating.rate}</p>
      <p>Rating Count: {rating.count}</p>
      <p>Description: {singleData.description}</p>
    </div>
    </div>
  )
}
export default ProductDetail;