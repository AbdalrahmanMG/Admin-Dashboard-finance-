import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import { theme } from "../themes/chartTheme";
import { DataItem } from "./DashCard";
// import { data } from "./data";
interface SmallPieProps {
  data: DataItem[];
  schemaColor: string;
}

export default function SmallPieChart({ data, schemaColor }: SmallPieProps) {
  const Theme = useTheme();
  return (
    <Box sx={{ height: "100px", width: "100px" }}>
      <ResponsivePie
        data={data}
        theme={theme(Theme)}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.6}
        padAngle={0.7}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        colors={{ scheme: schemaColor }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={Theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
      />
    </Box>
  );
}
