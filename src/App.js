import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Components/Details/Details';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';
import OrderUpdate from './Components/OrderUpdate/OrderUpdate';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import ReviewOrder from './Components/ReviewOrder/ReviewOrder';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/Store';
import ProductsByCategory from './Components/ProductsByCategory/ProductsByCategory';
import SearchResult from './Components/SearchResult/SearchResult';
import Login from './Components/Login/Login';

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/quickShop/:quantity">
            <PlaceOrder />
          </Route>
          <Route path="/orderUpdate">
            <OrderUpdate />
          </Route>
          <Route path="/product/:category">
            <ProductsByCategory />
          </Route>
          <Route path="/searchResult/:keyWord">
            <SearchResult />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
     </Provider>
  );
}

export default App;
