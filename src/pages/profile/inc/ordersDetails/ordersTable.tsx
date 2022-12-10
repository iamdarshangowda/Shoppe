import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "Order ID", width: 90 },
  { field: "item", headerName: "Item name", width: 140 },
  { field: "price", headerName: "Price", width: 100 },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 120,
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  { id: 1, item: "Snow", price: "200", status: "Delivered", action: "View" },
  { id: 2, item: "Snow", price: "200", status: "Delivered", action: "View" },
  { id: 3, item: "Snow", price: "200", status: "Delivered", action: "View" },
  { id: 4, item: "Snow", price: "200", status: "Delivered", action: "View" },
  { id: 5, item: "Snow", price: "200", status: "Delivered", action: "View" },
  { id: 6, item: "Snow", price: "200", status: "Delivered", action: "View" },
  { id: 7, item: "Snow", price: "200", status: "Delivered", action: "View" },
  { id: 8, item: "Snow", price: "200", status: "Delivered", action: "View" },
];

export const OrderTable = () => {
  const theme: any = useTheme();
  let pageSize: number = 5;
  //const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  //const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

  if (lessThanSmall) {
    pageSize = 10;
  }

  return (
    <div style={{ height: pageSize == 5 ? 371 : 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
