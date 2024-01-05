import React from "react";
import { Grid, Typography } from "@mui/material";
import { AddToFavorites,SendResume,Share } from "./Buttons";
import Image from "next/image";
interface Props {
  image: string;
  title: string;
  company: string;
  city: string;
  website: string;
  // define your props here
}

const Jobheader: React.FC<Props> = ({
  image,
  title,
  company,
  city,
  website,
}) => {
  return (
    <Grid container columns={16}>
      <Grid item xs={3}>
        <Image src={image} alt={`${company} logo`} />
      </Grid>
      <Grid item xs={4}>
        <Typography></Typography>
        <Typography></Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography></Typography>
        <Typography></Typography>
      </Grid>
      <Grid item xs={3}><SendResume/><AddToFavorites/></Grid>
      <Grid item xs={2}><Share/></Grid>
    </Grid>
  );
};

export default Jobheader;
