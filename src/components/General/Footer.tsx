import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import Animation from "./Animation";

interface Props {
  // define your props here
}

const Footer: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        height: "312px",
        bgcolor: "primary.dark",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h2">Find your dream job</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", columnGap: "10px" }}>
        <Typography variant="h3" color={"#4C5331"}>
          Made with love by:
        </Typography>
        <Animation name="Parinaz" />
        <Animation name="Saeed" />
        <Animation name="Iliya" />
        <Animation name="Narges" />
      </Box>
    </Box>
  );
};

export default Footer;
