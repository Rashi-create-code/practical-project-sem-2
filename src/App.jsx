import React from "react";
import Child from "./Component/Child";
import Users from "./Component/Users";


function App() {
  const name = "Rashi";
  const age = 22;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age}/>
      <h1>Fetching Data</h1>
      <Users/>
    </div>
  );
}

export default App;