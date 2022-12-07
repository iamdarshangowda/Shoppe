import { useContextDetails } from "src/context/ContextProvider";

export const getCartPrefillDetails = () => {
  const { user, GlobalDetails }: any = useContextDetails();

  if (localStorage.getItem("user")) {
    let savedUserData = localStorage.getItem("user");
    let parsedData = JSON.parse(savedUserData || "");
    if (user.email == parsedData.email) {
      GlobalDetails.dispatch({
        type: "cart-details",
        value: parsedData.cartData,
      });
    }
  }
};
