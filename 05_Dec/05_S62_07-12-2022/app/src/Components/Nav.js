function Nav() {
  var navstyle = {
    backgroundColor: "black",
    padding: "20px",
    color: "white",
    textAlign: "right",
  };
  var aStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "50px",
  };
  return (
    <div style={navstyle}>
      <a style={aStyle} href="">
        Home
      </a>
      <a style={aStyle} href="">
        Profile
      </a>
      <a style={aStyle} href="">
        Products
      </a>
      <a style={aStyle} href="">
        ContactUs
      </a>
    </div>
  );
}

export default Nav;
