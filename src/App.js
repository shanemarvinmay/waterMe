import React, {useState} from 'react';
import Donut from './components/Donut';
import logo from './logo.svg';
import water_icon from './imgs/water_icon.png';
import './App.css';

function App() {
  const [amount, setCount] = useState(0);
  return (
    <div className="App">
      <img src={water_icon} style={{width:"12vw"}} />
      <Donut amount={amount} style={{margin:"0 auto"}}/>
      <input type="number" onKeyPress={(event) => {
          var code = event.keyCode || event.which;
          if(code === 13) { //13 is the enter keycode
              setCount(amount + parseFloat(event.target.value));
              event.target.value = '';
          }  
        }} style={{margin:"auto",padding:"10px;"}}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
