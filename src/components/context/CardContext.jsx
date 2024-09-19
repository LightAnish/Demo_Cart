import { createContext, useState } from "react";

const AddtoCardContext = createContext();

const AddtoCardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <AddtoCardContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </AddtoCardContext.Provider>
  );
};

export { AddtoCardContext, AddtoCardProvider };
