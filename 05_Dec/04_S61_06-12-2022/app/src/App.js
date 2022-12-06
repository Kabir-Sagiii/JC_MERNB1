import Card from "./Components/Card";
import Nav from "./Components/Nav";
import Text from "./Components/Text";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Counter />
      <Text />
      {/* <div className="container">
        <Card
          img="https://th.bing.com/th/id/OIP.lzECLwvnyWXogFBUYWQ4UAHaJQ?pid=ImgDet&rs=1"
          name="Ayush"
          gender="Male"
        />
        <Card
          img="https://fordmurraylaw.com/wp-content/uploads/2018/12/Professional-Woman.jpg"
          name="Alina"
          gender="Female"
        />
        <Card
          img="https://th.bing.com/th/id/OIP.liCeAArd2embneQ-8vQFTQHaJQ?pid=ImgDet&w=640&h=800&rs=1"
          name="Rohan"
          gender="Male"
        />
        <Card
          img="https://www.carvermostardi.com/cmos/wp-content/uploads/2018/05/professional_headshots_tampa_011.jpg"
          name="Sneha"
          gender="Female"
        />
      </div> */}
    </div>
  );
}

export default App;
