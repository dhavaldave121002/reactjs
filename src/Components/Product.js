const Product = (props) => {
  // console.log(props);
  const { image, title, price, rating } = props.data;
  return (
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
    </div>
  );
};
// default export
export default Product;
