import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

interface Props {
  menu: any;
  defaultTabIndex: any;
  onChange: (value: any) => void;
}
export const CustomTabs: React.FunctionComponent<Props> = ({
  menu,
  defaultTabIndex,
  onChange,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(menu[newValue].value);
  };

  useEffect(() => {
    setValue(defaultTabIndex);
  }, [defaultTabIndex]);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered scrollButtons="auto">
        {menu.map((item: any, index: number) => (
          <Tab label={item.label} key={index} />
        ))}
      </Tabs>
    </Box>
  );
};
