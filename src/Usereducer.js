import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
   switch (action) {
      case 1:
         return state + 1;
      case 2:
         return state + 2;
      case 3:
         return state + 3;
      case 'Reset':
         return 0;
      default:
      throw new Error('Error');
   }
};

const Reducer = () => {
   const [ans, dispatch] = useReducer(reducer, initialState);
   return (
      <div>
         <h2>{ans}</h2>
         <button onClick={() => dispatch(1)}>Add 1</button>
         <button onClick={() => dispatch(2)}>Add 2</button>
         <button onClick={() => dispatch(3)}>Add 3</button>
         <button onClick={() => dispatch('Reset')}>reset</button>
      </div>
   );
};
export default Reducer;