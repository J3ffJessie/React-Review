// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function LightSwitch(props) {
  const [state, setState] = useState('OFF')

//function as first argument, second is an array
  useEffect(() => {
    console.log('new state equals: ', state)
//state in [state] refers to what is changing
  }, [state]);

  
  return (
    <div>
    {state === 'ON' ?  <span>🌞</span> : <span>🌙</span>}
     
    <button onClick={() => setState(prevState => (prevState === "OFF" ? 'ON' : 'OFF'))}>
      
      
      
      
      Flip Switch{props.buttonIcon}</button>
  </div>
  )
}



function App() {

  return (
    <div className="App">
      <LightSwitch buttonIcon = "💡" />
      <LightSwitch buttonIcon = "🍕" />
     
    </div>
  );
}

export default App;
