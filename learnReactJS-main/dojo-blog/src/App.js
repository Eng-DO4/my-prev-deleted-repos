import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <Navbar> => need to be closed */}
      <Navbar /> {/* <Navbar></Navbar> => also works */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
