import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FourOFour from './components/FourOFour';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Welcome}/>
        <Route component={FourOFour} />
      </Switch>
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