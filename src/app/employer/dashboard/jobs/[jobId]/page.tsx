import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import { jobs } from "@/MockData/data";
import Stack from "@mui/material/Stack";
import Application from "@/components/Employer/dashboard/Application";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { jobId: string } }) {
  const Job = jobs.find((job) => job.id === params.jobId);
  // const data = await getData()

  if (!Job) {
    return <>job {params.jobId} not found</>;
  }
  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Grid
        container
        columns={{ xs: 4, sm: 14, md: 16 }}
        sx={{
          borderColor: "#FF5DA2",
          border: "solid",
          borderRadius: "10px",
          margin: "auto",
          marginY: "100px",
          width: "90%",
          padding: "5px",
          boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 4px 0px inset",
        }}
        alignItems="center"
        justifyContent={"center"}
        spacing={1}
      >
        <Grid item xs={3}>
          <Image
            src={Job?.imageURL}
            alt={`${Job?.company} logo`}
            width={140}
            height={140}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2" sx={{ color: "#212121" }}>
            {Job?.title}
          </Typography>
          <Typography variant="h2" sx={{ color: "info.main" }}>
            {" "}
            <LocationCityIcon fontSize="small" />
            {Job?.company}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            {" "}
            <LocationOnIcon fontSize="small" />
            {Job?.location}
          </Typography>
          <a href={`https://${Job?.website}`}>
            <Typography color="#7CBDFA">{Job?.website}</Typography>
          </a>
        </Grid>
        <Grid item xs={5}>
          
          <Button variant="contained" color="info">
            Edit job information
          </Button>
          
        </Grid>
      </Grid>
      <Stack
        direction={"column"}
        alignItems={"center"}
        sx={{ bgcolor: "#FAFAFA" ,border:'solid'}}
        width={"1200px"}

      >
        <Application
          name="narges"
          city="Tehran"
          imageURL="/General/Profile.png"
          status="reject"
        />
           <Application
          name="narges"
          city="Tehran"
          imageURL="/General/Profile.png"
          status="reject"
        />
           <Application
          name="narges"
          city="Tehran"
          imageURL="/General/Profile.png"
          status="pending"
        />
           <Application
          name="narges"
          city="Tehran"
          imageURL="/General/Profile.png"
          status="accept"
        />
           <Application
          name="narges"
          city="Tehran"
          imageURL="/General/Profile.png"
          status="pending"
        />
      </Stack>
    </Box>
  );
}

/* // <h1 style={{marginTop:'200px'}}>{params.jobId}</h1> */
