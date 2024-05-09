import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface SliderProps {
  sliderValue: number | number[];
  setSliderValue: React.Dispatch<React.SetStateAction<number | number[]>>;
}

export default function SliderBar({
  sliderValue,
  setSliderValue,
}: SliderProps) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={sliderValue}
        value={sliderValue}
        aria-label="Small"
        valueLabelDisplay="auto"
        color="warning"
        min={202}
        max={300}
        onChange={(event: Event, newValue: number | number[]) =>
          setSliderValue(newValue)
        }
      />
    </Box>
  );
}
