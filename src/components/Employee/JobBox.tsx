import React from 'react';
import { Grid, Typography, Box } from "@mui/material";
import { AddToFavorites, SendResume, Share } from "../Job/Buttons";
import Image from "next/image";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface Props {
    imageURL: string;
  title: string;
  location: string;
  company: string;
  date:string;
  id:string;
}

const JobBox: React.FC<Props> = ({  imageURL,
    title,
    location,
    company,
    date,
    id,}) => {
  return (
    <Grid
    container
    columns={{ xs: 4, sm: 14, md: 16 }}
    sx={{
      borderColor: "#FF5DA2",
      border: "solid",
      borderRadius: "10px",
      margin: "auto",
      marginY: "10px",
      width: "90%",
      padding: "5px",
      boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 4px 0px inset",
    }}
    alignItems="center"
    justifyContent={"center"}
  >
    <Grid item xs={3}>
      <Image
        src={imageURL}
        alt={`${company} logo`}
        width={140}
        height={140}
      />
    </Grid>
    <Grid item xs={8}>
      <Typography variant="h2" sx={{ color: "#212121" }}>
        {title}
      </Typography>
      <Typography>
        {" "}
        <LocationOnIcon fontSize="small" />
        {location}
      </Typography>
      <Typography variant="h2" sx={{ color: "info.main" }}>
        {" "}
        <LocationCityIcon fontSize="small" />
        {company}
      </Typography>
    </Grid>

    <Grid item xs={3}>
      <SendResume />
      <AddToFavorites />
    </Grid>
    <Grid item xs={2}>
      <Share />
    </Grid>
  </Grid>
  );
}

export default JobBox;