"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SRTable from "@/components/Employer/Allposts";
import { Typography } from "@mui/material";

interface Job {
  id: number;
  data: { title: string; publication: Date; expirationDate: Date };
}

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  const [data, setData] = useState<Job[]>([]);
  const Token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://127.0.0.1:8000/job/api/company-jobs", {
      method: "GET",
      headers: {
        Authorization: `Token ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((job: Job) => ({
          ...job,
          expirationDate: new Date(
            new Date(job.data.publication).setMonth(
              new Date(job.data.publication).getMonth() + 2
            )
          ), // Add this line
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error:", error);
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
        marginLeft: "100px",
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
        <SRTable data={data} />
      </Box>
    </Box>
  );
};

export default Page;
