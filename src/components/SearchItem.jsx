import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import ErrorNotFound from "./structures/ErrorNotFound";
import Loading from "./structures/Loading";
import Card from "./Cart";

const SearchItem = () => {
  const { term } = useParams();
  const { product } = useContext(ProductContext);
  const [searchdata, setSearchdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Filter the product list based on the search term
    const searchList = product?.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchdata(searchList);
  }, [term, product]);

  useEffect(() => {
    // Set loading to false when searchdata is not empty
    if (searchdata?.length > 0) {
      setLoading(false);
    }
  }, [searchdata]);
  return (
    <div>
      {searchdata?.length <= 0 ? (
        <ErrorNotFound />
      ) : loading ? (
        <Loading />
      ) : (
        <Card value={searchdata} />
      )}
    </div>
  );
};

export default SearchItem;
