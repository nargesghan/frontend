"use client";
import React from "react";
import Box from "@mui/material/Box";
import SRTable from "@/components/Employee/SubmittedResumesTable";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1158px",
        marginLeft: "250px",
        marginTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
          <Typography>Submitted resumes</Typography>
        </Box>
        <SRTable />
      </Box>
      <Link href='/'>
      <Button
        sx={{
          maxWidth: "330px",
          widht: "fit-content",
          backgroundColor: "secondary.light",
          color: "#FFFFFF",
          height: "62px",
          fontSize: "24px",
          fontWeight: "bold",
          margin:'16px',
          "&:hover": {
            color: "secondary.main", 
            borderWidth:'2px',
            borderColor:'secondary.main',
            borderStyle:'solid'
          },
        }}
      >
        Explore more jobs...
      </Button>
      </Link>
    </Box>
  );
};

export default Page;
