import Nav from "./Components/Nav";
import Parent from "./Components/Parent/Parent";
import "./App.css";
import A from "./Components/Context/A";
import Profile from "./Components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import HomeProduct from "./Components/Products/HomeProduct";
import Electronic from "./Components/Products/Electronic";
import Jewelery from "./Components/Products/Jewelery";
import User from "./Components/Users/User";
import Header from "./Components/Classcomp/Header";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/context" element={<A />} />

        <Route path="/products" element={<HomeProduct />}>
          <Route path="electronic" element={<Electronic />} />
          <Route path="jewelery" element={<Jewelery />} />
        </Route>
        <Route path="/user" element={<User />} />
        <Route path="/class" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
