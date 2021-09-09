import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Header from "./Components/Header";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productName">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
