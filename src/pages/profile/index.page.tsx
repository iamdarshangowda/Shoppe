import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CustomTabs } from "@/components/ui-components/common/tabs/custom-tabs";
import { useRouter } from "next/router";
import { AddressConatiner } from "./inc/addressDetails/addressContainer";
import { OrdersConatiner } from "./inc/ordersDetails/ordersContainer";
import { ProfileContainer } from "./inc/profileDetails/profileContainer";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";

const tabItems = [
  { label: "Profile", value: "profile" },
  { label: "Address", value: "address" },
  { label: "Orders", value: "orders" },
];

const Profile = () => {
  const [defaultTabIndex, setDefaultTabIndex] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

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

      {defaultTabIndex == 0 && <ProfileContainer />}
      {defaultTabIndex == 1 && <AddressConatiner />}
      {defaultTabIndex == 2 && <OrdersConatiner />}

      <BackdropLoader open={loading} />
    </Box>
  );
};

export default Profile;
