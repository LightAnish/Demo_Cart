import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import { AddtoCardContext } from "./context/CardContext";
import Loading from "./structures/Loading";
import { ToastContainer, toast, Bounce } from "react-toastify";
// import { Bounce } from "react-toastify/dist/Bounce";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ value }) => {
  const { product } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(AddtoCardContext);
  const [loading, setLoading] = useState(true);

  const adddataOnCart = (id) => {
    // console.log(id);

    const dataOnCart = product?.filter((item) => item.id === id);

    setCartItems((prev) => [...prev, dataOnCart[0]]);
    toast.success("Cart Added", {
      position: "top-right",
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

  useEffect(() => {
    if (value && value?.length > 0) {
      setLoading(false);
    }
  }, [value]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={150}
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
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="container grid  sm:grid-cols-1 md:grid-cols-2 sm:px-1 lg:grid-cols-3 gap-2 py-3 ">
            {value?.map((item) => (
              <div
                key={item.id}
                className="card relative my-2 sm:w-[18rem] md:w-[20rem] md:h-fit"
                // style={{ width: "20rem" }}
                style={{
                  // width: "30%",
                  height: "35rem",
                  // margin: "1rem",
                  overflow: "hidden",
                  border: "1px solid black",
                  cursor: "pointer",
                  // padding: "10px",
                }}
              >
                {/* <div className="container w-full h-[10rem] bg-amber-400 flex items-center justify-center">*/}
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    className="card-img-top p-2 h--[7rem] object-cover object-center size-80 mt-6  "
                    alt="..."
                  />
                </Link>

                {/* </div> */}
                <div className="card-body absolute bottom-3 md:items-center md:justify-center md:bottom-0 md:left-0 md:right-0 md:p-2">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {item.title}
                  </h5>
                  <h3
                    className="card-title text-xl"
                    style={{ fontWeight: "bold" }}
                  >
                    {item.price} {"$"}
                  </h3>
                  <Link href="#" className="btn btn-primary mx-4">
                    Buy Now
                  </Link>
                  <button
                    onClick={() => adddataOnCart(item.id)}
                    // to={`/cart/${item.id}`}
                    className="btn btn-warning"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
