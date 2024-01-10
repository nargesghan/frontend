"use client";
import React from "react";
import Box from "@mui/material/Box";
import SRTable from "@/components/Employee/SubmittedResumesTable";
import { Typography } from "@mui/material";
interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1158px",
        backgroundColor: "red",
        marginLeft: "250px",
        marginTop:'5%',
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "68px",
          backgroundColor: "secondary.light",
          borderStyle: "solid",
          borderColor: "#0EC5D7",
          borderWidth: "1px",
          borderBottom:0,
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          display:'flex',
          alignItems:'center',
        }}
      >
        <Typography>Submitted resumes</Typography>
      </Box>
      <SRTable />
    </Box>
  );
};

export default Page;
