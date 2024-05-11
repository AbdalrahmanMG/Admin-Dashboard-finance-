import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import DashUpperPart from "../../components/DashUpperPart";
import DashMiddlePart from "../../components/DashMiddlePart";
import DashLowerPart from "../../components/DashLowerPart";
import BigHeader from "../../components/BigHeader";

export default function Dashboard() {
  return (
    <Box>
      <BigHeader title="Dashboard" subtitle="Welcome to your dashboard"/>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <DashUpperPart/>
      <DashMiddlePart/>
      <DashLowerPart/>
    </Box>
  );
}
