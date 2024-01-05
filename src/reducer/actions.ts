import { ProductProps } from "@/pages/product/[id]"

export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_OF_CART = 'REMOVE_OF_CART'
}

export function addProductAction(product: ProductProps) {
    return {
        type:ActionTypes.ADD_TO_CART,
        payload: {
            data: product
        }
    }
}

export function removeProductAction(productId: string) {
    return {
        type:ActionTypes.REMOVE_OF_CART,
        payload: {
            data: productId
        }
    }
}


