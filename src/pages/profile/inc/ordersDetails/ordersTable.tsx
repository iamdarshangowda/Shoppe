import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import { getDateFmt } from "@/utils/dataModifiers";

interface Props {
  prevOrders: any[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "Order ID", width: 70 },
  { field: "item", headerName: "Item name", width: 140, flex: 1 },
  { field: "price", headerName: "SubTotal", width: 120 },
  { field: "date", headerName: "Ordered On", width: 120 },
  {
    field: "action",
    headerName: "Action",
    width: 70,
  },
];

export const OrderTable: React.FunctionComponent<Props> = ({ prevOrders }) => {
  const theme: any = useTheme();
  let pageSize: number = 5;
  //const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  //const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

  if (lessThanSmall) {
    pageSize = 10;
  }

  const [rows, setRows] = useState<any[]>([]);
  const setOrderRows = () => {
    const rowsData = prevOrders.map((item: any, index: number) => ({
      id: item?.orderId ? item?.orderId : index,
      item: item?.productList.map((item: any) => item.title),
      price: `${item?.subTotal}`,
      date: getDateFmt(new Date(item?.orderedOn?.seconds * 1000)),
      action: "View",
    }));
    setRows(rowsData);
  };

  useEffect(() => {
    setOrderRows();
  }, [prevOrders]);

  return (
    <div style={{ height: pageSize == 5 ? 371 : 600 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
