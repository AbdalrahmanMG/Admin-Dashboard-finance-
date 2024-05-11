import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import React from 'react'
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import BigHeader from "../../components/BigHeader";

export default function Teams() {
  const theme = useTheme();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", align: "center", headerAlign: "center" },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "access",
      headerName: "acess",
      align: "center",
      headerAlign: "center",
      flex: 1,
      ///////////////// I dont get these 2 lines
      renderCell: ({ row: { access } }) => {
        return (
          // <Box sx={{ height: "100%", backgroundColor: 'red' }} >
          <Box
            sx={{
              p: "5px",
              mx: "auto",
              // height: "100%",
              borderRadius: "3px",
              width: "99px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
            // alignContent={"center"}
            // alignSelf={"baseline"}
            textAlign={"center"}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            {access === "User" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography sx={{ fontSize: "14px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
          // </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
      <BigHeader title="Teams" subtitle="Managing the Team Members" />

      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
