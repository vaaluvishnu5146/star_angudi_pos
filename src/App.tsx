import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.scss";
import POSLayout from "./Journeys/Application/POS";
import Catalogue from "./Journeys/Application/Catalogue/Catalogue";
import TableView from "./Journeys/Application/TableView/TableView";
import OffersView from "./Journeys/Application/Offers/Offers";
import CreateOrders from "./Journeys/Application/Orders/CreateOrders";
import ManageOrders from "./Journeys/Application/Orders/ManageOrders";
import OrdersJourney from "./Journeys/Application/Orders";
import Login from "./Journeys/AuthJourney/Login";
import Signup from "./Journeys/AuthJourney/Signup";
import ForgotPassword from "./Journeys/AuthJourney/ForgotPassword";
import Error404 from "./Journeys/Error/Error404";
import Landing from "./Journeys/Landing/Landing";
import ManageProducts from "./Journeys/Application/Catalogue/ManageProduct";
import CreateProduct from "./Journeys/Application/Catalogue/CreateProduct";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route Component={Landing} path="/" />
        {!loggedIn ? (
          <>
            <Route Component={Login} path="/login">
              <Route Component={Signup} path="/signup" />
              <Route Component={ForgotPassword} path="/resetpassword" />
            </Route>
          </>
        ) : (
          <>
            <Route Component={POSLayout} path="/pos/:id" />
            <Route Component={Catalogue} path="/catalogue">
              <Route Component={ManageProducts} index />
              <Route
                Component={CreateProduct}
                path="/catalogue/createProduct"
              />
            </Route>
            <Route Component={TableView} path="/table" />
            <Route Component={OffersView} path="/offers" />
            <Route Component={OrdersJourney} path="/orders">
              <Route Component={CreateOrders} index />
              <Route Component={ManageOrders} path="/orders/order/:id" />
              <Route Component={ManageOrders} path="/orders/manageorders" />
            </Route>
          </>
        )}
        <Route Component={Error404} path="*" />
      </Routes>
    </div>
  );
}

export default App;
