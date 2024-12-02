import './App.css';
import Car from './Car';
import { PropsPara } from './PropsPara';
import { HideShow } from './HideShow';
import TemperatureConverter from './tempretureConverter';
function App() {
  return (
    <div className="App">
      <h1 style={{color:'yellow',backgroundColor:'navy'}}>Welcome,To react project</h1>
      <Car/>
      <PropsPara name={"sangram"} address={"Kadegaon"} number={"3987423874"} count={0}/>
      <HideShow/>
      <TemperatureConverter/>
    </div>
  );
}

export default App;
