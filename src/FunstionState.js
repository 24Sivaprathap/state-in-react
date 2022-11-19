import React, {useState} from "react"

const MyComponent = () => {
    const [value, setValue] = useState(0);      
  return (

    <div>
       <p>Count numbers :{value}</p>
       
            <button onClick={() => setValue((value + 1))}>Increament Value</button>
            <button onClick={() => setValue((value - 1))}>Decreament Value</button>
            <button onClick={() => setValue(0)}>Reset</button>
    </div>

  )
}

export default MyComponent;

