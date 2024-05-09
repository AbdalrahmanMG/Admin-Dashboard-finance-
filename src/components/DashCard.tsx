import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import SmallPieChart from "./SmallPieChart";

export interface DataItem {
    id: string;
    label: string;
    value: number;
    color: string;
  }

interface DashCardProps {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  percent: string;
  data: DataItem[];
  schemaColor: string;
}

export default function DashCard({
  icon,
  title,
  subTitle,
  data,
  percent,
  schemaColor,
}: DashCardProps) {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "300px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        px:2
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography>{title}</Typography>
        <Typography>{subTitle} </Typography>
      </Stack>
      <Stack gap={1} alignItems={"center"}>
        <SmallPieChart data={data} schemaColor={schemaColor} />
        <Typography>{percent}</Typography>
      </Stack>
    </Paper>
  );
}
