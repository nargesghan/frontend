import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { AddToFavorites, SendResume, Share } from "./Buttons";
import Image from "next/image";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Truculenta } from "next/font/google";

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
      <Grid item xs={4}>
        <Typography variant="h2" sx={{ color: "#212121" }}>
          {title}
        </Typography>
        <Typography variant="h2" sx={{ color: "info.main" }}>
          {" "}
          <LocationCityIcon fontSize="small" />
          {company}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>
          {" "}
          <LocationOnIcon fontSize="small" />
          {location}
        </Typography>
        <a href={`https://${website}`}><Typography color='#7CBDFA'>{website}</Typography></a>
      </Grid>
      <Grid item xs={3}>
        <SendResume sentResume={false}/>
        <AddToFavorites liked={true} />
      </Grid>
      <Grid item xs={2}>
        <Share />
      </Grid>
    </Grid>
  );
};

export default Jobheader;
