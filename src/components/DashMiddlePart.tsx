import React from "react";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "../pages/LineChart/LineChart";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "../pages/Dashboard/data";

export default function DashMiddlePart() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      sx={{ hight: " 300px" }}
      gap={1}
      mt={3}
    >
      <Paper sx={{ flexGrow: 1, maxWidth: "800px", minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              fontWeight={"bold"}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography ml={4}>number</Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineChart inDashboard={true} />
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          borderRadius: "3px",
          minWidth: "300px",
          maxHeight: 380,
        }}
      >
        <Paper>
          <Typography
            p={1.5}
            variant="h6"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
          >
            Recent Transaction
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.5} width={"33%"}>
                <Typography fontWeight={"600"}>{item.txId}</Typography>
                <Typography>{item.user}</Typography>
              </Box>

              <Typography textAlign={'center'} width={"33%"}>{item.date}</Typography>

              <Box width={"33%"} sx={{display: 'flex', justifyContent:"right"}}>
                <Typography
                  borderRadius={1.4}
                  p={1}
                  width={"fit-content"}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                  variant="body2"
                >
                  {item.cost}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
