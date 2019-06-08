import React from "react";
// pulling in data from json file
import data from "./data/example.json";

function App() {
  return (
    <div>
      {data.map((eachItem, i) => (
        <div key={i}>
          <h1>{eachItem.title}</h1>
          <p>{eachItem.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
