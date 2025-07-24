const Navbar = () => {
  return (
    <div className="navbar" style={styled}>
      <h1>Logo</h1>
      <ul className="navlinks">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const styled={
  "backgroundColor":"red",
  "color":"white",
  "margin":"-8px"
}
export default Navbar;