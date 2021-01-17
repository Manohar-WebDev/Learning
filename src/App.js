import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import { Data } from "./data";

function App() {
  const [data, setData] = useState(Data);
  const [input, setInput] = useState("");
  //console.log(data);
  return (
    <div className="App">
      <h1>Age Finder</h1>
      <Users data={data} setData={setData} />
    </div>
  );
}

export default App;
