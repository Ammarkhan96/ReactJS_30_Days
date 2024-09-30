import React, { useState } from 'react';

export default function TwentySix() {
  const [state, setState] = useState({ count: 0, text: 'Hello World', isActive: true });
  const [newText, setNewText] = useState('');

  function incrementCount() {
    setState({ ...state, count: state.count + 1 });
  }

  function decrementCount() {
    setState({ ...state, count: state.count - 1 });
  }

  function changeText() {
    setState({ ...state, text: newText });  
  }

  function toggleActive() {
    setState({ ...state, isActive: !state.isActive });
  }

  function handleInputChange(e) {
    setNewText(e.target.value); 
  }

  return (
    <div>
      <h1>Multiple State</h1>
      <p>Count: {state.count}</p>
      <p>Text: {state.text}</p>
      <input 
        type="text" 
        value={newText} 
        onChange={handleInputChange} 
        placeholder="Update text here" 
      />
      <p>Active: {state.isActive ? 'YES' : 'NO'}</p>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={changeText}>Change Text</button>
      <button onClick={toggleActive}>Toggle Active</button>

    </div>
  );
}
