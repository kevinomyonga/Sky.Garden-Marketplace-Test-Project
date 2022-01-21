import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./types";
export const addToCart =
  (item: any) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
export const removeItem =
  (item: any) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });
  };
export const emptyCart = () => (dispatch: (arg0: { type: string }) => void) => {
  dispatch({
    type: EMPTY_CART,
  });
};
