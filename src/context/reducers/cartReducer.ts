interface action {
  type: any;
  qty: any;
  payload: any;
}

export const cartReducer = (state: any, action: action) => {
  switch (action?.type) {
    case "ADD-TO-CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: action.qty }],
      };
    case "REMOVE-FROM-CART":
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
