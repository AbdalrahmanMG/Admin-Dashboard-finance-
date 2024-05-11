import React, { useState } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { data } from "./data";
import { theme } from "./../../themes/chartTheme";
import { contries } from "./world_countries";
import SliderBar from "../../components/SliderBar";

interface GeoProps {
  isLowerPart: boolean;
}

export default function GeoChart({ isLowerPart }: GeoProps) {
  const Theme = useTheme();

  const [sliderValue, setSliderValue] = useState<number | number[]>(202);

  // const handleSliderChange = (event: Event, newValue: number | number[]) => {
  //   setSliderValue(newValue);
  //   console.log(sliderValue);
  // };

  return (
    <Box
      sx={{
        height: isLowerPart ? "300px" : "75vh",
        borderRadius: "3px",
        
        border:isLowerPart? '' : "1px solid red",
      }}
    >
      <ResponsiveChoropleth
        data={data}
        theme={theme(Theme)}
        features={contries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="equalEarth"
        projectionScale={sliderValue}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineWidth={0}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        isInteractive={true}
        legends={
          isLowerPart
            ? []
            : [
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
              ]
        }
      />
      {isLowerPart ? (
        ""
      ) : (
        <Stack direction={"row"} gap={2} marginTop={2}>
          <Typography fontSize={18}>Zoom in</Typography>
          <SliderBar
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
        </Stack>
      )}
    </Box>
  );
}
