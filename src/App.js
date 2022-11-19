// import logo from './logo.svg';
import './App.css';
import Counter from './ClassFunction';
import Example from './Props';
import MyComponent from './FunstionState';
import Sample from './StateEx';
import Ref from './Useref';
import Component1 from './UseContext';
import Increment from './UseEffect';
import Useref1 from './Useref1';
import Reducer from './Usereducer';



function App() {
  return (
    <div className="App">
    <h1>hello world</h1>
    <Counter></Counter>
    <MyComponent></MyComponent>
    <Example></Example>
    <Sample></Sample>
    <br/>
    <Ref></Ref>
    <br/>
    <Component1></Component1>
    <Increment></Increment>
    <Useref1></Useref1>
    <Reducer></Reducer>

</div>
  );
}

export default App;
