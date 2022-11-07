import React, { useState, useEffect } from 'react'
import '../styles/App.css';
const App = () => {


  const [name, setName] = useState("_______");

  const setthis = () => {
    let tempname = document.getElementById("input").value;
    setName(() => tempname);
  }
  return (
    <div id="main">
      <input id='input' ></input>
      <button id='button' onClick={setthis}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}

// onChange={}
export default App;
