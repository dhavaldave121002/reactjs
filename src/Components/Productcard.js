import { useEffect, useState } from "react";
import { ProductListData } from "../Utils/Productlist";
import Product, { HOF } from "./Product";
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

  const HOFComponent=HOF(Product);

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
      <div className="mt-10 ml-3"   >
        <input type="text" placeholder="Search" value={searchData}  className="border border-gray-700 px-2 py-1"onChange={(e)=>{
          setSearchData(e.target.value)

        }}/>
        <button className="bg-amber-300 px-6 py-1 rounded-sm text-white" onClick={()=>{
          const findData=dataList.filter(product=>product.title.toLowerCase().includes(searchData.toLowerCase()))
          setFilterSearch(findData)

        }}>Search</button>
      </div>
      <button  className="bg-amber-300 px-6 py-1 rounded-sm text-white ml-3 mt-3" onClick={()=>{
        const filteredData=dataList.filter(product => product.rating.rate >= 4);
        setData(filteredData)
      }
      }>Top Rated Products</button>
      <input className="border border-gray-500 ml-5" type="text"/>
    <div className=" max-w-7xl mx-auto mt-10 grid grid-cols-5 gap-3">
      {
        filterSearch.map((product, index) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>{product.rating.rate >=4 ?<HOFComponent product={product}/>:<Product product={product}/>}</Link>
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

