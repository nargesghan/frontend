"use client";
import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import SRTable from "@/components/Employer/Allposts";
import { Button, Typography } from "@mui/material";

interface Job {
  title: string;
  publication: Date;
  newApplications: number;  // Assuming new applications is a number
  expirationDate: Date;  // Assuming expiration date is a string in date format
}

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  const [data, setData] = useState<Job[]>([]);
  const Token=localStorage.getItem('token');
  useEffect(() => {
    fetch('http://127.0.0.1:8000/job/api/company-jobs/' + localStorage.getItem('userId'), {
      method: 'GET',
    
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

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
