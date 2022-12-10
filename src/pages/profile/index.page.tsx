import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CustomTabs } from "@/components/ui-components/common/tabs/custom-tabs";
import { useRouter } from "next/router";
import { AddressConatiner } from "./inc/addressDetails/addressContainer";
import { Orders } from "./inc/orders";
import { ProfileContainer } from "./inc/profileDetails/profileContainer";

const tabItems = [
  { label: "Profile", value: "profile" },
  { label: "Address", value: "address" },
  { label: "Orders", value: "orders" },
];

const Profile = () => {
  const [defaultTabIndex, setDefaultTabIndex] = useState<any>(0);
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
      {defaultTabIndex == 2 && <Orders />}
    </Box>
  );
};

export default Profile;
