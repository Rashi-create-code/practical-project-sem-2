import React,{useState,useEffect} from "react";

function Child(props) {
  return (
    <div>
      <h2 style={{color:"#2b282a"}}>Child Component</h2>
      <p style={{color:"#1470e8"}}>Name: {props.name}</p>
      <p style={{color:"#1470e8"}}>Age: {props.age}</p>
    </div>
  );
}

export default Child;