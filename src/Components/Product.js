const Product = ({product}) => {
  // console.log(props);
  const { image, title, price, rating } = product;
  return (
    <div className=" flex flex-col items-center justify-center border border-gray-600 h-90 p-4 hover:bg-gray-300 text-center">
      <img
        src={image}
        alt="img"
        className="w-30"
      />
      {/* <h1>{props.title}</h1>
      <p>Price: {props.price}</p>
      <p>Rating: {props.rating}</p> */}
      <h1>{title}</h1>
      <p>Price: {price}</p>
      <p>Rating: {rating.rate}</p>
    </div>
  );
};
// default export
export default Product;

export const HOF=(Product)=>{
  return (props)=>{
    return(
      <div className="relative">
        <span className="absolute -left-1 -top-1 bg-black text-white px-4 py-1 rounded-md">Best Seller</span>
        <Product {...props}/>
      </div>
    )
  };


}
