import React, { useState, useEffect } from "react";
import Dataresult from "./Dataresult";
import axios from "axios";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [reqName, setName] = useState("");
  const [inputname, setInputname] = useState();
  const [loading, setloading] = useState(false);

  const handleclick = (name) => {
    setName(name);
  };
  const handleInputChange = (e) => {
    setInputname(e.target.value);
    setResult("");
  };
  useEffect(() => {
    reqName && reqName !== "undefined" && setloading(true);
    reqName &&
      reqName !== "undefined" &&
      axios
        .get(`https://api.genderize.io/?name=${reqName}`)
        .then((res) => {
          let dataResult = res.data;
          setloading(false);
          setResult(dataResult);
        })
        .catch((err) => {});
  }, [reqName]);
  return (
    <div className="App">
      <header>
        <h3> Check Gender </h3>
      </header>
      <div>
        <form>
          <label>
            Enter name:
            <input
              type="text"
              name="checkGender"
              value={inputname}
              onChange={(event) => handleInputChange(event)}
            />
          </label>
          <button type="button" onClick={() => handleclick(inputname)}>
            Submit
          </button>
        </form>
      </div>
      <Dataresult loading={loading} result={result} />
    </div>
  );
}

export default App;
