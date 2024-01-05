import { ActionTypes } from "./actions";
import { ProductProps } from "@/pages/product/[id]"; 

export interface CartContextType {
  listProducts: ProductProps[];
  total: number;
}

export function cartReducer(state:CartContextType , action: any){
    var listCopy = state.listProducts

    switch(action.type){

      case ActionTypes.ADD_TO_CART:
        const product = action.payload.data
        listCopy = listCopy.concat(product)
        var totalPrice = listCopy.reduce((total, item) => total + item.priceNumber, 0)
        
        return {
          ...state,
          listProducts: listCopy,
          total: totalPrice
        };

      case ActionTypes.REMOVE_OF_CART:
        const productId = action.payload.data
        listCopy = listCopy.filter((product) => product.id !== productId);
        var totalPrice = listCopy.reduce((total, item) => total + item.priceNumber, 0)
        return {
          ...state,
          listProducts: listCopy,
          total: totalPrice
        };

      default:
        return state 
    }
  } 