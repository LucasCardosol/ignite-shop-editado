import { createContext, ReactNode, useReducer } from "react";
import { cartReducer } from "@/reducer/reducer";
import { ProductProps } from "@/pages/product/[id]";
import { addProductAction, removeProductAction } from "@/reducer/actions";
import { useState } from "react";
import BoxMessage from "@/components/toast";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartContextPropsType {
  listProducts: ProductProps[];
  total: number;
  addToCart: (product: any) => void;
  removeOfCart: (product: any) => void;
}

export const CartContext = createContext({} as CartContextPropsType);

function CartContextProvider({ children }: CartContextProviderProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [variantMessage, setVariantMessage] = useState("normal");

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      listProducts: [],
      total: 0,
    },
    (initialState) => {
      return initialState;
    }
  );
  const { listProducts, total } = cartState;

  function closeMessage() {
    setShowMessage(false);
  }

  function addToCart(product: any) {
    setShowMessage(true);
    if (!listProducts.some((item) => item.name === product.name)) {
      dispatch(addProductAction(product));
      setMessage(`${product.name} adicionado(a) ao carrinho`);
      setVariantMessage("");
    } else {
      setMessage(`Este produto ja esta no carrinho`);
      setVariantMessage("danger");
    }
  }

  function removeOfCart(product: any) {
    setShowMessage(true);
    setVariantMessage("");
    setMessage(`${product.name} removido(a) com sucesso`);
    dispatch(removeProductAction(product.id));
  }

  return (
    <CartContext.Provider
      value={{
        listProducts,
        total,
        addToCart,
        removeOfCart,
      }}
    >
      {children}
      <BoxMessage
        message={message}
        variantMessage={variantMessage}
        showMessage={showMessage}
        closeMessage={closeMessage}
      />
    </CartContext.Provider>
  );
}

export default CartContextProvider;
