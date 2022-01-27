
import './App.css';
import DevInfo from './DevInfo';
import Home from './Home';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />
      <Home />
      <Widget />
      <DevInfo />
    </div>
  );
}

export default App;
