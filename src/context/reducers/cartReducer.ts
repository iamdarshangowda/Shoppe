import { getExperimentalSetting } from "@firebase/util";

interface action {
  type: any;
  cartUpdate: any;
  payload: any;
}

export const cartReducer = (state: any, action: action) => {
  const handleAddCart = () => {
    const existingIndex = state.cart.findIndex(
      (item: any) => item.id == action.payload.id
    );
    if (existingIndex >= 0) {
      state.cart.splice(existingIndex, 1, {
        ...action.payload,
        ...action.cartUpdate,
      });
      return state.cart;
    } else {
      return [...state.cart, { ...action.payload, ...action.cartUpdate }];
    }
  };

  switch (action?.type) {
    case "ADD-TO-CART":
      return {
        ...state,
        cart: handleAddCart(),
      };
    case "REMOVE-FROM-CART":
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload.id),
      };
    case "REMOVE-ALL-ITEMS":
      return {
        ...state,
        cart: [],
      };
    case "REPLACE-ALL-ITEMS":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
