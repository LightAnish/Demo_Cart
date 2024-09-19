import FetchApi from "./components/context/FetchApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import MainNav from "./components/navbar/MainNav";
import Nav from "./components/navbar/Nav";
import Footer from "./components/navbar/Footer";
import ProductDeatail from "./components/ProductDeatail";
import { useContext, useState } from "react";
import { ProductContext } from "./components/context/ProductContext";
import AddToCart from "./components/AddToCart";
import FilterProduct from "./components/FilterProduct";
import SearchItem from "./components/SearchItem";
import ErrorNotFound from "./components/structures/ErrorNotFound";

const App = () => {
  const { product } = useContext(ProductContext);
  let data = product?.map((item) => item);

  return (
    <div>
      <FetchApi />
      <Router>
        <MainNav />
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Cart value={data} />} />
          <Route path="/product/:id" element={<ProductDeatail />} />
          <Route path="/filter" element={<FilterProduct />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/cart/:id" element={<AddToCart />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
