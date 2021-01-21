import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Components/Details/Details';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import ReviewOrder from './Components/ReviewOrder/ReviewOrder';

function App() {
  return (
    <div>
      <PlaceOrder />
      <Footer />
    </div>
  );
}

export default App;
