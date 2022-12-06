interface Props {
  cartDetails: any;
}

interface action {
  type: any;
  value: any;
}

export const initialState: Props = {
  cartDetails: [],
};

export const reducer = (state: any, action: action) => {
  switch (action?.type) {
    case "cart-details":
      return { ...state, cartDetails: action.value };
    default:
      return state;
  }
};
