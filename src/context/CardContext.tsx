import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface iCardContextProps {
  children: React.ReactNode;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iCardContext {
  productsList: iProduct[];
  addToCart: (product: iProduct) => void;
  removeOnCart: (productId: number) => void;
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
  currentSale: iProduct[];
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProductsList: React.Dispatch<React.SetStateAction<iProduct[]>>;
}

export const CardContext = createContext({} as iCardContext);

export const CardProvider = ({ children }: iCardContextProps) => {
  const [currentSale, setCurrentSale] = useState([] as iProduct[]);
  const [productsList, setProductsList] = useState([] as iProduct[]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentToken = window.localStorage.getItem("@TOKEN");

  function addToCart(product: iProduct) {
    setCurrentSale([...currentSale, product]);
  }

  function removeOnCart(productId: number) {
    const newList = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(newList);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/products", {
          headers: {
            authorization: `Bearer ${currentToken}`,
          },
        });
        setProductsList(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    getProducts();
  }, []);

  return (
    <CardContext.Provider
      value={{
        productsList,
        setProductsList,
        addToCart,
        removeOnCart,
        setCurrentSale,
        currentSale,
        modalIsOpen,
        setModalIsOpen,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
