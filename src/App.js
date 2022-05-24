// import logo from "./logo.svg";
import { uuid } from "uuidv4";
import "./App.css";
import { Daata, About } from "./data";
// https://www.youtube.com/watch?v=5llXA0RTYIU&t=591s

export default function App() {
  return (
    <div className="App">
      {Daata.map((ijustneedone) => (
        <div className="AppItem">
          <h1>{ijustneedone.title}</h1>
          <h1>{ijustneedone.id}</h1>
          <span> oor </span>
          {`${ijustneedone.title} ${uuid()}`}

          <img src={ijustneedone.image} alt="" />
        </div>
      ))}
      {About.map((AboutItem) => (
        <div className="AppItem">
          <h1>{AboutItem.title}</h1>
        </div>
      ))}
    </div>
  );
}
