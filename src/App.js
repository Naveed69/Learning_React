import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/count"

function App() {
  return (
    <div className="App"> 
      Learn React
      <Counter number={10}/>
    </div>
  );
}

export default App;
