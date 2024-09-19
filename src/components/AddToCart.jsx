import React, { useContext, useEffect, useState } from "react";
import { AddtoCardContext } from "../components/context/CardContext";
import CardEmpty from "./structures/CardEmpty";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = () => {
  const { cartItems, setCartItems } = useContext(AddtoCardContext);

  const deleteFilterHandeler = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.warn("Removed from cart!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="w-100">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      {cartItems?.length === 0 ? (
        <CardEmpty />
      ) : (
        <div className="container flex flex-column items-center w-100 p-5 overflow-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card mb-3"
              style={{ maxWidth: "700px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded"
                    alt={item.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title font-bold">{item.title}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <div className="d-flex ">
                      <button type="button" className="btn btn-primary me-3">
                        Buy Now
                      </button>
                      <button
                        onClick={() => deleteFilterHandeler(item.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Remove Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
