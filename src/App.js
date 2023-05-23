// import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Services from "./components/Services";
import Destination from "./components/Destination";
import { Package } from "react-feather";
import Packages from "./components/Packages";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Card />
      <Services />
      <center>
        <Destination />
      </center>
      <Packages/>
    </div>
  );
}

export default App;
