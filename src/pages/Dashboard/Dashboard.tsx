import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import DashUpperPart from "../../components/DashUpperPart";

export default function Dashboard() {
  return (
    <Box>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <DashUpperPart/>
    </Box>
  );
}
