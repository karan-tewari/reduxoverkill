import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/Login';
function App() {



  return (
    <div className="App">
      <Route path="/" component={Login} />
    </div>
  );
}

export default App;



// import {useSelector, useDispatch} from 'react-redux';
// import {increment, decrement, signin, signout} from './actions';

  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state=> state.isLogged);
  // const dispatch = useDispatch();


  /* <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signin())}>Signin</button>
      <button onClick={() => dispatch(signout())}>Signout</button>
      {isLogged ? <h1>This is personal info</h1> : <h1>Cant show</h1>} */