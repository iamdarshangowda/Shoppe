import React, { useEffect, useState } from "react";
import { useContextDetails } from "src/context/ContextProvider";
import { GetUserDocument } from "src/services/users.services";

const usePrevOrders = () => {
  const { user }: any = useContextDetails();
  const [prevOrders, setPrevOrders] = useState<any[]>([]);

  const getPreviousOrders = async () => {
    await GetUserDocument(user).then((res: any) => {
      setPrevOrders(res.orders);
    });
  };

  useEffect(() => {
    if (user?.uid) getPreviousOrders();
  }, [user]);

  return { prevOrders };
};

export default usePrevOrders;
