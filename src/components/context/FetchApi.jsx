import axios from "axios";
import { ProductContext } from "./ProductContext";
import { useContext, useEffect } from "react";

const FetchApi = () => {
  const { setProduct } = useContext(ProductContext); // Add setProduct to update context

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data); // Update the context with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [setProduct]); // Add setProduct as a dependency
};

export default FetchApi;
