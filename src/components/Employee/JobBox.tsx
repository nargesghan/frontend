import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { AddToFavorites, SendResume, Share } from "../Job/Buttons";
import Image from "next/image";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

interface Props {
  imageURL: string;
  title: string;
  location: string;
  company: string;
  sentResume: boolean;
  liked: boolean;
  id: string;
}

const JobBox: React.FC<Props> = ({
  imageURL,
  title,
  location,
  company,
  sentResume,
  liked,
  id,
}) => {
  const token = localStorage.getItem("token");
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 14, md: 16 }}
      sx={{
        borderRadius: "10px",
        marginY: "10px",
        width: "100%",
        padding: "5px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
      alignItems="center"
      justifyContent={"center"}
    >
      <Grid item xs={3}>
        <Link href={`/job/${id}`}>
          <Image
            src={imageURL}
            alt={`${company} logo`}
            width={140}
            height={140}
          />
        </Link>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h2" sx={{ color: "#212121" }}>
          {title}
        </Typography>
        <Typography variant="h3">
          {" "}
          <LocationOnIcon fontSize="small" />
          {location}
        </Typography>
        <Typography variant="h3">
          {" "}
          <LocationCityIcon fontSize="small" />
          {company}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        {" "}
        <Stack spacing={2}>
          <SendResume sentResume={sentResume} />
          <AddToFavorites liked={liked} />
        </Stack>
      </Grid>

      <Grid item xs={3}>
        <Share />
      </Grid>
    </Grid>
  );
};

export default JobBox;
