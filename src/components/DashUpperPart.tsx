import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Stack, useTheme } from "@mui/material";
import DashCard from "./DashCard";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data3, data2, data4 } from "../pages/Dashboard/data";

export default function DashUpperPart() {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      gap={2}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
    >
      <DashCard
        icon={<EmailIcon sx={{ color: theme.palette.secondary.main }} />}
        title={"Title"}
        subTitle={"sub title"}
        data={data1}
        schemaColor={'nivo'}
        percent={"+14%"}
      />
      <DashCard
        icon={<PointOfSaleIcon sx={{ color: theme.palette.secondary.main }} />}
        title={"Title"}
        subTitle={"sub title"}
        data={data2}
        schemaColor={'paired'}
        percent={"+14%"}
      />
      <DashCard
        icon={<PersonAddIcon sx={{ color: theme.palette.secondary.main }} />}
        title={"Title"}
        subTitle={"sub title"}
        data={data3}
        schemaColor={'category10'}
        percent={"+14%"}
      />
      <DashCard
        icon={<TrafficIcon sx={{ color: theme.palette.secondary.main }} />}
        title={"Title"}
        subTitle={"sub title"}
        data={data4}
        schemaColor={'accent'}
        percent={"+14%"}
      />
    </Stack>
  );
}
