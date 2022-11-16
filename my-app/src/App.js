// import logo from './logo.svg';
import './App.css';
import Cards from "./Cards"
import Data from "./data/data.json"
import Showcards from './Showcards';
function App() {

  return (
    <div className="App">
    <Showcards propsData={Data}/>
    
    </div>
  );
}

export default App;
