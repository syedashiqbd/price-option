import './App.css';
import Navbar from './components/navbar/Navbar';
import PriceOptions from './components/priceOptions/PriceOptions';

function App() {
  return (
    <div className="w-10/12 mx-auto pt-6">
      <Navbar />
      <PriceOptions></PriceOptions>
    </div>
  );
}

export default App;
