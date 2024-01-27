import React from 'react';
import  Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import  Typography  from "@mui/material/Typography";
import Link from 'next/link';
import Image from "next/image";

import LocationOnIcon from "@mui/icons-material/LocationOn";

interface Props {
 name:string;
 city:string;
 imageURL:string;
 status:'accept'|'reject'|'pending'
}

const Application: React.FC<Props> = ({name,city,imageURL,status}) => {
  return (
    <Grid
    container
    columns={{ xs: 4, sm: 14, md: 16 }}
    sx={{
      
      borderRadius: "10px",
      marginY: "10px",
      width: "85%",
      padding: "5px",
      boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
    }}
    alignItems="center"
    justifyContent={"center"}
  >
    <Grid item xs={3} sx={{padding:'7px'}}>
      <Image
        src={imageURL}
        alt={`${name} logo`}
        width={140}
        height={140}
      />
    </Grid>
    <Grid item xs={5}>
      <Typography variant="h2" sx={{ color: "#212121" }}>
        {name}
      </Typography>
      <Typography variant='h3'>
        {" "}
        <LocationOnIcon fontSize="small" />
        {city}
      </Typography>
 
    </Grid>

    <Grid item xs={4}>
      <Link href={`/employer/dashboard/jobs/${1}/resumes/${name}`}>
   <Button variant="contained" color="info"  sx={{width:'150px',height:'45px'}}>view resume</Button></Link>
    </Grid>
    <Grid item xs={4}>
        {status=='accept'?   <Button variant='contained' sx={{bgcolor:'#DAEC8B',color:'#2DC071',width:'150px',height:'45px'}}>accepted</Button>:
        status=='pending'?   <Button variant='contained' sx={{bgcolor:'#BFBEA1',color:'#737260',width:'150px',height:'45px'}}>pending</Button>:
        <Button variant='contained' sx={{bgcolor:'#FFE7F1',color:'#732A49',width:'150px',height:'45px'}}>rejected</Button>}
  
    </Grid>
  </Grid>
  );
}

export default Application;