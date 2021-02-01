import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Components/Details/Details';
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Payment from './Components/Payment/Payment';
import NotFound from './Components/NotFound/NotFound';
import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';

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
          <PrivateRoute path="/confirmOrder">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/quickShop/:quantity">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/orderUpdate">
            <OrderUpdate />
          </PrivateRoute>
          <PrivateRoute path="/payment/:number">
            <Payment />
          </PrivateRoute>
          <Route path="/product/:category">
            <ProductsByCategory />
          </Route>
          <Route path="/searchResult/:keyWord">
            <SearchResult />
          </Route>
          <Route path="/dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
     </Provider>
  );
}

export default App;
