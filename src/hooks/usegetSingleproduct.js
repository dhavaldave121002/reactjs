import { useState,useEffect } from "react";

const usegetSingleproduct =(id)=>{

  const [singleData, setsingleData] = useState(null);

  useEffect(() => {
    fetchSingleproduct();
  }, []);
  const fetchSingleproduct=async()=>{
    const data=await fetch(`https://fakestoreapi.com/products/${id}`);
    const dt=await data.json();
    setsingleData(dt);
  }
  return singleData;
}
export default usegetSingleproduct;