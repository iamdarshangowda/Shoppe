import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CustomTabs } from "@/components/ui-components/common/tabs/custom-tabs";
import { useRouter } from "next/router";
import { AddressConatiner } from "./inc/addressDetails/addressContainer";
import { OrdersConatiner } from "./inc/ordersDetails/ordersContainer";
import { ProfileContainer } from "./inc/profileDetails/profileContainer";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { useContextDetails } from "src/context/ContextProvider";
import {
  GetUserDocument,
  UpdateUserDocument,
} from "src/services/users.services";

const tabItems = [
  { label: "Profile", value: "profile" },
  { label: "Address", value: "address" },
  { label: "Orders", value: "orders" },
];

const Profile = () => {
  const [defaultTabIndex, setDefaultTabIndex] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any | {}>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });
  const router = useRouter();
  const { user }: any = useContextDetails();

  const handleEventChange = (value: string, type: string) => {
    setUserData((prev: any) => ({ ...prev, [type]: value }));
  };

  const handleSubmit = () => {
    delete userData.email;
    UpdateUserDocument(userData, user.uid);
    getUserPrefillData();
  };

  const getUserPrefillData = () => {
    GetUserDocument(user).then((res: any) => {
      setUserData({
        first_name: res.first_name,
        last_name: res.last_name,
        phone: res.phone,
        email: res.email,
      });
    });
  };

  useEffect(() => {
    getUserPrefillData();
  }, [user]);

  const handleTabChange = (value: any) => {
    router.replace(`${router.pathname}?tab=${value}`);
  };

  useEffect(() => {
    tabItems.forEach((item: any, index: number) => {
      if (item.value == router.query.tab) {
        setDefaultTabIndex(index);
      }
    });
  }, [router.query.tab]);

  return (
    <Box>
      <CustomTabs
        menu={tabItems}
        defaultTabIndex={defaultTabIndex}
        onChange={handleTabChange}
      />

      {defaultTabIndex == 0 && (
        <ProfileContainer
          userData={userData}
          handleEventChange={handleEventChange}
          handleSubmit={handleSubmit}
        />
      )}
      {defaultTabIndex == 1 && <AddressConatiner />}
      {defaultTabIndex == 2 && <OrdersConatiner />}

      <BackdropLoader open={loading} />
    </Box>
  );
};

export default Profile;
