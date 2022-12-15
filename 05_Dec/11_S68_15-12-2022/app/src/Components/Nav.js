import { Link } from "react-router-dom";
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
      <Link style={aStyle} to="/">
        Home
      </Link>
      <Link style={aStyle} to="/profile">
        Profile
      </Link>
      <Link style={aStyle} to="/user">
        Users
      </Link>
      <Link style={aStyle} to="/products">
        Products
      </Link>
      <Link style={aStyle} to="/context">
        Context
      </Link>
      <Link style={aStyle} to="/class">
        ClassComp
      </Link>

      <Link style={aStyle} to="/redux">
        Redux
      </Link>
    </div>
  );
}

export default Nav;
