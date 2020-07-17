import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state=> state.isLogged)

  return (
    <div className="App">
      <h2>Hello {counter}</h2>
      {isLogged ? <h1>This is personal info</h1> : <h1>Cant show</h1>}
      </div>
  );
}

export default App;
