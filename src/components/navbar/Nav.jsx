import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { FilterContext } from "../context/Filter";
import "../mediascreen/nav.css";

const Nav = () => {
  // const { category } = useParams();
  const { product } = useContext(ProductContext);
  const { setFilter } = useContext(FilterContext);

  const filterCategory = (catogery) => {
    const element = product?.filter((item) => item.category === catogery);
    console.log(element);
    setFilter(element);
  };

  const filterPrice = (price, range) => {
    const element = product?.filter(
      (item) => item.price >= price && item.price <= range
    );
    console.log(element); // Log filtered items
    setFilter(element);
  };

  return (
    <nav
      className="navbar bg-dark border-bottom border-body flex justify-center"
      data-bs-theme="dark"
    >
      <ul className="nav nav-pills py-2 ">
        <li className="nav-item hidden lg:block " id="btn-filter">
          <button type="button" className="btn btn-filter btn-info">
            Filter Products {"->"}
          </button>
        </li>
        <li className="nav-item">
          <Link
            to="/filter"
            onClick={() => filterCategory("men's clothing")}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Men Clothes
          </Link>
        </li>
        <li className="nav-item ">
          <Link
            to="/filter"
            onClick={() => filterCategory("women's clothing")}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Women Clothes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/filter"}
            onClick={() => filterCategory("electronics")}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Electronics
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/filter"}
            onClick={() => filterCategory("jewelery")}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Jewelery
          </Link>
        </li>
        <li className="nav-item ">
          <Link
            onClick={() => {
              filterPrice(50, 200);
            }}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            50 to 200
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={() => {
              filterPrice(200, 1000);
            }}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            200 to 1000
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
