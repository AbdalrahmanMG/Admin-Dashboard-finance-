import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import SmallPieChart from "./SmallPieChart";
import { data1 } from "../pages/Dashboard/data";
import SmallHeader from "./SmallHeader";
import BarChart from "../pages/BarChart/BarChart";
import GeoChart from "../pages/Geography/GeoChart";

export default function DashLowerPart() {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={2}>
      <Paper sx={{ width: "30%", flexGrow: 1, minWidth: "300px" }}>
        <SmallHeader title="Campaign" />
        <SmallPieChart isLowerPart={true} data={data1} schemaColor={"nivo"} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>{" "}
      </Paper>
      <Paper sx={{ width: "30%", flexGrow: 1, minWidth: "300px" }}>
        <SmallHeader title="Sales Quantity" />
        <BarChart isLowerPart={true} />
      </Paper>
      <Paper sx={{ width: "30%", flexGrow: 1, minWidth: "300px" }}>
        <SmallHeader title="Geography" />
        <GeoChart isLowerPart={true}/>
      </Paper>
    </Stack>
  );
}
