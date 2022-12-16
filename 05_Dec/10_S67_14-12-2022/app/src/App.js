import Nav from "./Components/Nav";
import Parent from "./Components/Parent/Parent";
import "./App.css";
import A from "./Components/Context/A";
import Profile from "./Components/Profile/Profile";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeProduct from "./Components/Products/HomeProduct";
import Electronic from "./Components/Products/Electronic";
import Jewelery from "./Components/Products/Jewelery";
import User from "./Components/Users/User";
import Header from "./Components/Classcomp/Header";
import ImageComp from "./Components/Classcomp/Image";
import Input from "./Components/Redux/Input";
import Text from "./Components/Redux/Text";
import ProductDetails from "./Components/Products/ProductDetails";
import City from "./Components/Redux/City";
import UserComp from "./Components/Redux_Task/UserComp";
import UseReducerComp from "./Components/UseReducer/UseReducerComp";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <UseReducerComp /> */}
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/context" element={<A />} />

        <Route path="/products" element={<HomeProduct />}>
          <Route path="" element={<Navigate to="jewelery" />} />
          <Route path="electronic" element={<Electronic />} />
          <Route path="jewelery" element={<Jewelery />} />
        </Route>

        <Route path="/user" element={<User />} />
        <Route path="/class" element={<ImageComp />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route
          path="/redux"
          element={
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <UserComp />
              <div>
                <Input />
                <Text />
                <City />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
