import {useState} from 'react';
import './App.css';
import Tips from './components/Tips';
import Display from './components/Display';
import People from './components/People';
import Bill from './components/Bill';

function App() {
  const [state, setState] = useState({bill: 0, tip: 0, people: 0});
  const handleChange = (e) => {
    setState((prev) => ({...prev, [e.target.name]: +e.target.value}));
  };
  const handleClick = () => {
    setState({bill: 0, tip: 0, people: 0});
  };

  return (
    <main>
      <div className="left-side">
        <Bill handleChange={handleChange} state={state} />
        <Tips handleChange={handleChange} state={state} />
        <People handleChange={handleChange} state={state} />
      </div>
      <div className="right-side">
        <Display state={state} />
        <button onClick={handleClick} className="reset">
          RESET
        </button>
      </div>
    </main>
  );
}

export default App;
