import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";


interface Props {
    name:string;
    size:string;
  imageURL: string;
  industry:string;
  location: string;
  website: string;
  // define your props here
}

const Companyheader: React.FC<Props> = ({
  imageURL,
  name,
  size,
  industry,
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
        marginY: "100px",
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
          alt={`${name} logo`}
          width={140}
          height={140}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography  sx={{ color: "#212121",fontWeight:700,fontSize:'35px' }} component={'h1'}>
          {name}
        </Typography>
        <Typography variant="h2" sx={{ color: "info.main" }}>
          {" "}
          
          company size: <br /> {size}
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
      <Grid item xs={3}><Typography sx={{fontSize:'35px'}}>Industry</Typography>
       <Typography variant="h2">{industry}</Typography>
      </Grid>
      
    </Grid>
  );
};

export default Companyheader;
