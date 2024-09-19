import { createContext, useState } from "react";

const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ContextProvider };
