import './App.css';
import data from './products.json';
import Navbar from './components/navbar.js';
import Products from './components/products.js';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className = "main-container">
            <Products />
        </div>
                   
    </div>
  );
}

export default App;
