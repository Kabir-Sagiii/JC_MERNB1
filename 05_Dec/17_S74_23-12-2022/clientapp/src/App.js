import logo from "./logo.svg";
import "./App.css";
import Products from "./Component/Products";
import Users from "./Component/Users/Users";
import NewUser from "./Component/Users/NewUser";
import { Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import UserDetails from "./Component/Users/UserDetails";
import UpdateUser from "./Component/Users/Userupdate";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
