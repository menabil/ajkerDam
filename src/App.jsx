import { Routes, Route } from "react-router";
import Rootlayout from "./component/layout/Rootlayout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Products from "./component/pages/Products";
import Services from "./component/pages/Services";
import ShopDetails from "./component/pages/ShopDetails";
import ProductDetail from "./component/pages/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="shop-details" element={<ShopDetails />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
