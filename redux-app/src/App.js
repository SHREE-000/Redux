import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from './Actions'


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
      
      <div>
        <h1>Counter : {counter}</h1>
        <button onClick={()=> dispatch(increment(5))}>INCREMENT</button>
        <button onClick={()=> dispatch(decrement(10))}>DECREMENT</button>
        {isLogged ? <h3>Valuable Information I Shouldn't See</h3> : ''}
      </div>


      </header>
    </div>
  );
}

export default App;
