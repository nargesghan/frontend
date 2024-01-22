"use client";
import React from "react";
import Box from "@mui/material/Box";
import SRTable from "@/components/Employer/Allposts";
import { Button, Typography } from "@mui/material";
interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1158px",
        marginTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft:'100px'
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "68px",
            backgroundColor: "secondary.light",
            borderStyle: "solid",
            borderColor: "#0EC5D7",
            borderWidth: "1px",
            borderBottom: 0,
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>All posted ads</Typography>
        </Box>
        <SRTable />
      </Box>

    </Box>
  );
};

export default Page;
