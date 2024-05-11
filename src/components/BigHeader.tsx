import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
interface BigHeaderProps {
  title: string;
  subtitle: string;
}

export default function BigHeader({ title, subtitle }: BigHeaderProps) {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );
}
