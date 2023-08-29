import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import './App.css';
import {Cart} from "./pages/cart";
import { Shop } from "./pages/shop";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
