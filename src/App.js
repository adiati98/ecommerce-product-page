import './App.css';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ProductPage />
      </header>
    </div>
  );
}

export default App;
