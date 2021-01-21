import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Components/Details/Details';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';
import OrderUpdate from './Components/OrderUpdate/OrderUpdate';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import ReviewOrder from './Components/ReviewOrder/ReviewOrder';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:key">
          <Details />
        </Route>
        <Route path="/reviewOrder">
          <ReviewOrder />
        </Route>
        <Route path="/confirmOrder">
          <PlaceOrder />
        </Route>
        <Route path="/orderUpdate">
          <OrderUpdate />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
