import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import { MdOutlineStarHalf } from "react-icons/md";
import Cart from "./Cart";

const ProductDeatail = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();
  const [suggestItems, setSuggestItems] = useState();

  useEffect(() => {
    const productsets = product?.find((item) => item.id == id);
    setProductDetail(productsets);

    const showSuggestItems = product?.filter(
      (item) => item.category === productsets.category
    );
    setSuggestItems(showSuggestItems);
  }, [id, product]);

  useEffect(() => {
    console.log("ProductDetail", productDetail);
    console.log("SuggestItems", suggestItems);
  }, [productDetail, suggestItems]);

  return (
    <>
      <div className="flex justify-center py-5">
        <div className="card mb-3" style={{ maxWidth: "80%" }}>
          <div className="row g-0">
            <div className="col-md-4 px-5 py-3">
              <img
                src={productDetail?.image}
                className="img-fluid rounded-start"
                style={{ width: "50%" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title font-bold text-2xl">
                  {productDetail?.title}
                </h5>
                <p className="card-text font-sans font-normal text-base my-3">
                  {productDetail?.description}
                </p>
                <div className="card-text flex justify-between">
                  <h1
                    className="text-black font-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    {productDetail?.price} <span className="text-black">$</span>
                  </h1>
                  <small className="text-body-secondary font-bold flex">
                    Rating {productDetail?.rating.rate}{" "}
                    <span className="text-xl text-blue-300 flex">
                      {<MdOutlineStarHalf />}
                      {<MdOutlineStarHalf />}
                      {<MdOutlineStarHalf />}
                    </span>
                  </small>
                </div>

                <div className="py-3">
                  <a href="#" className="btn btn-primary mx-4">
                    Buy Now
                  </a>
                  <a href="#" className="btn btn-warning">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Cart value={suggestItems} />
      </div>
    </>
  );
};

export default ProductDeatail;
