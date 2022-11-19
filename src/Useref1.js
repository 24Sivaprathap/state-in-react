import { useEffect, useRef } from "react";

const Useref1 = () => {

const colorParagraph = useRef(null);// colorParagraph = (current:null)
const colors = ['yellowgreen','black','red','blue','orange','pink','gray','yellow'];

useEffect (() => {
console.log(colorParagraph);
console.log(colorParagraph.current);
});

const styleParagraph = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    colorParagraph.current.style.color = colors[randomColor];
}
  return (
    <div>
<button onClick={() => {styleParagraph()}}>Click Here</button>
      <h1 ref={colorParagraph}>Hi this is SivaPrathap</h1>
    </div>
  );
}

export default Useref1;
