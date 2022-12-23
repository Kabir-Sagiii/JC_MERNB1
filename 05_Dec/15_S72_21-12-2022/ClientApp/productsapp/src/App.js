import logo from "./logo.svg";
import "./App.css";
import Products from "./Component/Products";
import Users from "./Component/Users/Users";
import NewUser from "./Component/Users/NewUser";
import { Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", color: "red" }}>
              <h2>Home Component Under Developmeent</h2>
            </div>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/newuser" element={<NewUser />} />
      </Routes>
    </div>
  );
}

export default App;
