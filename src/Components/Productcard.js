import { useState } from "react";
import { ProductListData } from "../Utils/Productlist";
import Product from "./Product";
//named export
export const Productcard = () => {
  //Local state variable
  // const[dataList,setData]=useState(ProductListData)
  // const arry=useState(ProductListData)
  // const [dataList,setData]=arry
  const arry=useState(ProductListData)
  const dataList=arry[0]
  const setData=arry[1]
  
  return (
    <div>
      <button onClick={()=>{
        const filteredData=dataList.filter(product => product.rating.rate >= 4);
        setData(filteredData)
      }
      } style={{"marginTop":"30px"}}>Top Rated Products</button>
    <div className="productcard">
      {
        dataList.map((product, index) => {
          return (
            <Product key={product.id} data={product} />
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
  );
};

