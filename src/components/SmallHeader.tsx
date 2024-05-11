import React from "react";
import { Typography, useTheme } from "@mui/material";
interface HeaderProps {
  title: string;
}

export default function SmallHeader({ title }: HeaderProps) {
  const theme = useTheme();
  return (
    <Typography
      color={theme.palette.secondary.main}
      sx={{ padding: "30px 30px 0 30px" }}
      variant="h6"
      fontWeight="600"
    >
      {title}
    </Typography>
  );
}
