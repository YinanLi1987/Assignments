import logo from './logo.svg';
import './App.css';
import{useState} from 'react';

function App() {
  const [age,setAge]=useState(0);
  const[limit,setLimit]=useState(0);
  function calculate(){
    const upper=((220-age)*0.85).toFixed(0);
    const lower=((220-age)*0.65).toFixed(0);
    const result=lower+"-"+upper;
    setLimit(result);
  }
  return (
    <div>
     <h1>Heart rate limits calculator</h1>
     <form>
      <div>
        <label>Age</label><br/>
        <input type="number" value={age} onChange={e=>setAge(e.target.value)}></input>
      </div>
      <div>
        <label>Heart rate limits calculator</label><br/>
        <output>{limit}</output>
      </div>
      <button type="button" onClick={calculate}>Calculate</button>
     </form>
    </div>
  );
}

export default App;
