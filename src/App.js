import './App.css';
import React, { useState } from 'react'

function App(props) {
  const textChanged= (event)=>{
    setText(event.target.value);
  }
  const upper= ()=>{
    setText(text.toUpperCase());
  }
  const Lower= ()=>{
    setText(text.toLowerCase());
  }
  const [text,setText]=useState("Enter Text Here");
  return (
   <div className="App">
    
    <div className="Container my-3">
    <h1>{props.title }</h1>
      <textarea className="text" value ={text} onChange={textChanged } rows="8" cols="100"></textarea>
      <br></br>
      <button className='btn btn-primary m-2' value="Covert TO Upper Case" onClick={upper}>Covert TO Upper Case</button><t></t>
      <button className='btn btn-primary' value="Covert TO Lower Case" onClick={Lower}>Covert TO Upper Case</button>
      </div>
      <div className="Container my-3">
        <h3>Your Text Summary </h3>
        <p>Number Of Words = {text.split(" ").length}</p>
        <p>Number Of Characters = {text.length}</p>
      </div>
    </div>
  );
}

export default App;
