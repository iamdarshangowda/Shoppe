import { getExperimentalSetting } from "@firebase/util";

interface action {
  type: any;
  qty: any;
  payload: any;
}

export const cartReducer = (state: any, action: action) => {
  const handleAddCart = () => {
    const existng = state.cart.filter(
      (item: any) => item.id == action.payload.id
    );
    const remainingItems = state.cart.filter(
      (item: any) => item.id !== action.payload.id
    );
    if (existng.length) {
      return [...remainingItems, { ...existng[0], qty: action.qty }];
    } else {
      return [...state.cart, { ...action.payload, qty: action.qty }];
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
    default:
      return state;
  }
};
