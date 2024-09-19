import { useContext, useState, useEffect } from "react";
import { FilterContext } from "./context/Filter";
import Loading from "./structures/Loading";
import ErorNotFound from "./structures/ErrorNotFound";
import Cart from "./Cart";

const FilterProduct = () => {
  const { filter } = useContext(FilterContext);
  const [loading, setLoading] = useState(true);
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    if (filter?.length > 0) {
      setFilterdata(filter);
      setLoading(false);
    }
  }, [filter]);

  // useEffect(() => {}, [filter]);
  // useEffect(() => {}, [filterdata]);
  console.log(filterdata);

  return (
    <div>
      {filterdata?.length <= 0 ? (
        <ErorNotFound />
      ) : loading ? (
        <Loading />
      ) : (
        <Cart value={filterdata} />
      )}
    </div>
  );
};

export default FilterProduct;
