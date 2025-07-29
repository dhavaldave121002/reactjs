import { useEffect, useState } from "react";
import { ProductListData } from "../Utils/Productlist";
import Product from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
//named export
export const Productcard = () => {
  //Local state variable
  const[dataList,setData]=useState(ProductListData)
  // const arry=useState(ProductListData)
  // const [dataList,setData]=arry
  // const arry=useState([])
  // const dataList=arry[0]
  // const setData=arry[1]

  const [searchData,setSearchData]=useState("")

  const [filterSearch,setFilterSearch]=useState([])

  // console.log("useEffect called");
  useEffect(()=>{
    dataFetch();
  },[])
  const dataFetch=async()=>{
    const fetchData=await fetch("https://fakestoreapi.com/products/");
    const dt=await fetchData.json();
    setData(dt);
    setFilterSearch(dt)

  }
  //Conditi0nal rendering
  // if(dataList.length===0){
  //   return <Skeleton/>
  // }
  return dataList.length===0?<Skeleton/>:
    <div>
      <div style={{"marginTop":"30px"}}   >
        <input type="text" placeholder="Search" value={searchData} onChange={(e)=>{
          setSearchData(e.target.value)

        }}/>
        <button onClick={()=>{
          const findData=dataList.filter(product=>product.title.toLowerCase().includes(searchData.toLowerCase()))
          setFilterSearch(findData)

        }}>Search</button>
      </div>
      <button onClick={()=>{
        const filteredData=dataList.filter(product => product.rating.rate >= 4);
        setData(filteredData)
      }
      } style={{"marginTop":"30px"}}>Top Rated Products</button>
    <div className="productcard">
      {
        filterSearch.map((product, index) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}><Product data={product} /></Link>
          );
        })
      }
      {/* <Product data={ProductListData[0]}/>
      <Product data={ProductListData[1]}/>
      <Product data={ProductListData[2]}/>
      <Product data={ProductListData[3]}/>
      <Product data={ProductListData[4]}/>
      <Product data={ProductListData[5]}/>
      <Product data={ProductListData[6]}/>
      <Product data={ProductListData[7]}/>
      <Product data={ProductListData[8]}/> */}
      {/* <Product title="Jeans" price="$20" rating="4.2" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBVr6RuVkTxUBPtuXg795gqmLspn2iH8flA&s"/>
      <Product title="Shoes" price="$30" rating="4.8" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mnTqrE9jB4iJAeZI57UcLvEkUs2gRaZwpQ&s"/>
      <Product title="Watch" price="$40" rating="4.0" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkTjq_14W-NnWH5-Sw9U1saxeouNlXn707A&s"/>
      <Product title="Jacket" price="$50" rating="4.9" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZodCYpCCPz_Q4BDiFpxZJAhU1piEp998Hw&s"/> */}
    </div>
    </div>
};

