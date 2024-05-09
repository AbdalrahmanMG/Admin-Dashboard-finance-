import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { data } from "./data";
import { theme } from './../../themes/chartTheme';
import { contries } from "./world_countries";

export default function GeoChart() {
  const Theme = useTheme()
  return (
    <Box sx={{ height: "75vh", borderRadius: "3px", border: "1px solid red" }}>
      <ResponsiveChoropleth
        data={data}
        theme = {theme(Theme)}
        features={contries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={170}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -20,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: Theme.palette.text.secondary,
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: Theme.palette.text.primary,
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
