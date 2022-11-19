import { useState, useEffect } from "react";  

const Increment = () => {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState ('Initial Message');


useEffect(() => {
    console.log('component mounted/updated');
    console.log(msg);
    console.log('count is increased to count', count);
},[count]);

  return (
    <div>
<button onClick={() => {setCount((count + 1))}}>Increment Value</button>    
<p>The count value is: {count}</p>
</div>
  )
}
  

export default Increment;
