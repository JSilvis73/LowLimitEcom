import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
