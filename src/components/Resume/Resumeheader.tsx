import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface Props {
  image: string;
  firstname: string;
  lastname: string;
  city: string;
  website: string;
  phonnumber: string;
  email: string;
}

const Resumeheader: React.FC<Props> = ({
  image,
  firstname,
  lastname,
  city,
  website,
  phonnumber,
  email,
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
        marginY: "100px",
        width: "90%",
        padding: "5px",
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 4px 0px inset",
      }}
      alignItems="center"
      justifyContent={"center"}
    >
      <Grid item xs={3}>
        <Image src={image} alt={`${firstname} logo`} width={140} height={140} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h2" sx={{ color: "#212121" }}>
          {firstname}
        </Typography>
        <Typography variant="h2" sx={{ color: "#212121" }}>
          {lastname}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>
          {" "}
          <LocationOnIcon fontSize="small" />
          {city}
        </Typography>
        <a href={`https://${website}`}>
          <Typography color="#7CBDFA">{website}</Typography>
        </a>
      </Grid>
      <Grid item xs={5}>
   {/* contact info */}
   <Typography>
          {" "}
       contact info
        </Typography>
        <a href={`https://${phonnumber}`}>
          <Typography color="#7CBDFA">{phonnumber}</Typography>
        </a>
        <a href={`https://${email}`}>
          <Typography color="#7CBDFA">{email}</Typography>
        </a>
      </Grid>
   
    </Grid>
  );
};

export default Resumeheader;
