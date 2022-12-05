import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Header title="Header Component" />
      <Main title="Main Component" />
    </div>
  );
}

export default App;
