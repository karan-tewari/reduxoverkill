import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signin, signout} from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Hello {counter}</h2>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signin())}>Signin</button>
      <button onClick={() => dispatch(signout())}>Signout</button>
      {isLogged ? <h1>This is personal info</h1> : <h1>Cant show</h1>}
      </div>
  );
}

export default App;
