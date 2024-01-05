import React from "react";
import { Grid, Typography } from "@mui/material";
import { AddToFavorites, SendResume, Share } from "./Buttons";
import Image from "next/image";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface Props {
  imageURL: string;
  title: string;
  company: string;
  location: string;
  website: string;
  // define your props here
}

const Jobheader: React.FC<Props> = ({
  imageURL,
  title,
  company,
  location,
  website,
}) => {
  return (
    <Grid
      container
      columns={{xs: 4, sm: 8,md:16}}
      sx={{
        borderColor: "info",
        border: "solid",
        borderRadius: "10px",
      margin:'auto',
      marginY:'10px',
      width:'90%',
      padding:'5px',
      }}
    >
      <Grid item xs={3}>
        <Image
          src={imageURL}
          alt={`${company} logo`}
          width={140}
          height={140}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h2">{title}</Typography>
        <Typography>     <LocationCityIcon fontSize="small" />{company}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>    <LocationOnIcon fontSize="small"  />{location}</Typography>
        <Typography>{website}</Typography>
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
};

export default Jobheader;
