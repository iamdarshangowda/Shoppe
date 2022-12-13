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
  UpdateUserAddress,
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
  const [userAdrressData, setUserAddressData] = useState<any | {}>({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    street: "",
    landmark: "",
  });
  const router = useRouter();
  const { user }: any = useContextDetails();

  const handleUserEventChange = (value: string, type: string) => {
    setUserData((prev: any) => ({ ...prev, [type]: value }));
  };

  const handleAddressEventChange = (value: string, type: string) => {
    setUserAddressData((prev: any) => ({ ...prev, [type]: value }));
  };

  const handleSubmitUserData = () => {
    setLoading(true);
    Object.keys(userData).forEach((item) => {
      if (!userData[item]?.length) {
        delete userData[item];
      }
    });
    delete userData.email;
    UpdateUserDocument(userData, user.uid);
    getUserPrefillData();
    setLoading(false);
  };

  const handleSubmitAddress = () => {
    setLoading(true);
    Object.keys(userAdrressData).forEach((item) => {
      if (!userAdrressData[item]?.length) {
        delete userAdrressData[item];
      }
    });

    UpdateUserAddress(userAdrressData, user.uid);
    getUserPrefillData();
    setLoading(false);
  };

  const getUserPrefillData = () => {
    setLoading(true);
    GetUserDocument(user).then(
      (res: any) => {
        setUserData({
          first_name: res.first_name,
          last_name: res.last_name,
          phone: res.phone,
          email: res.email,
        });
        setUserAddressData({
          name: res.address?.name,
          phone: res.address?.phone,
          pincode: res.address?.pincode,
          city: res.address?.city,
          street: res.address?.street,
          landmark: res.address?.landmark,
        });
        setLoading(false);
      },
      (error: any) => {
        setLoading(true);
      }
    );
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
          handleEventChange={handleUserEventChange}
          handleSubmit={handleSubmitUserData}
        />
      )}
      {defaultTabIndex == 1 && (
        <AddressConatiner
          userData={userAdrressData}
          handleEventChange={handleAddressEventChange}
          handleSubmit={handleSubmitAddress}
        />
      )}
      {defaultTabIndex == 2 && <OrdersConatiner />}

      <BackdropLoader open={loading} />
    </Box>
  );
};

export default Profile;
