"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography,Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Link from "next/link";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const HoverBox = styled(Box)(({ theme }) => ({

  maxWidth:"447px",
  height: "247px",
  margin: "10px",
  "&:hover": {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  borderRadius: "10px",
}));

interface Props {
  imageURL: string;
  title: string;
  location: string;
  company: string;
  date:string;
  id:number;

  // define your props here
}

const JobBox: React.FC<Props> = ({
  imageURL,
  title,
  location,
  company,
  date,
  id,

}) => {
  return (
    <>
      <HoverBox sx={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <Stack spacing={0} sx={{ paddingX: "20px", flexGrow: 1 }}>
          <Image src={imageURL} alt="company logo" width={80} height={80} />
          <Typography variant="h2" sx={{ margin: 0 }}>{title}</Typography>
          <Typography variant="body2"  sx={{display:'flex', alignItems:'center'}}>
            <LocationOnIcon fontSize="small"  />
            {location}
          </Typography>
          <Typography variant="body2"  sx={{display:'flex', alignItems:'center'}}>
            <LocationCityIcon fontSize="small" />
            {company}
          </Typography>
          
          <Typography variant="body2" sx={{display:'flex', alignItems:'center'}}>
            <QueryBuilderIcon fontSize="small" />
            {date}
          </Typography>
          
        </Stack>
        <Link href={`/job/${id}`}>
          <Button
            sx={{
              height: "42px",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            fullWidth={true}
            color="secondary"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            more information
          </Button>
        </Link>
      </HoverBox>
    </>
  );
};

export default JobBox;
