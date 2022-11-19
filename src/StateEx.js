import React, {useState} from "react"

function Sample() {
    const [name, setName] = useState("");
      
    return (

      <div>

        <h1>Hi this is {name}!</h1>

        <button type="button" onClick={() => setName("Siva")} >S</button>

        <button type="button"  onClick={() => setName("Dheena")} >D</button>

        <button type="button" onClick={() => setName("Bheem")} >B</button>

        <button type="button"  onClick={() => setName("Ajay")} >A</button>

      </div>

    );
  }
  

export default Sample

