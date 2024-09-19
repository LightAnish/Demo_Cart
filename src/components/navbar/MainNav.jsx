import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { AddtoCardContext } from "../context/CardContext";
import { FaCartShopping } from "react-icons/fa6";
import Nav from "./Nav";

const MainNav = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const { product } = useContext(ProductContext);
  const { cartItems } = useContext(AddtoCardContext);
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchProduct}`);
    setSearchProduct("");
  };

  return (
    <>
      <div className="mainNav sticky top-0 z-50 w-full text-white bg-gray-800 p-2">
        <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link to={`/`} className="font-bold">
              <span style={{ fontSize: "20px" }}>Demo-Cart</span>
            </Link>
          </div>
          <div>
            <div className="container-fluid">
              <form onSubmit={searchHandler} className="d-flex" role="search">
                <input
                  className="form-control"
                  onChange={(e) => setSearchProduct(e.target.value)}
                  value={searchProduct}
                  type="search"
                  placeholder="Search item"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-white ml-2 d-none d-lg-block"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="">
            <button type="button" className="btn btn-primary position-relative">
              <Link to={"/cart"}>
                <FaCartShopping size={20} className="w-auto h-auto" />
              </Link>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length === 0 ? null : cartItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default MainNav;
