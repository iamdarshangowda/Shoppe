interface Props {
  profileDetails: any;
}

interface action {
  type: any;
  value: any;
}

export const initialState: Props = {
  profileDetails: {},
};

export const reducer = (state: any, action: action) => {
  switch (action?.type) {
    case "profile-details":
      return { ...state, profileDetails: action.value };
    default:
      return state;
  }
};
