import './App.css';
import HOCCall from './Component/HOCCall';
import HOC from './Component/ParentHOC';
import PureCompo from './Component/PureCompo';

function App() {
  return (
    <div className="App">
      <PureCompo />
      <HOCCall value={HOC}/>
    </div>
  );
}

export default App;
