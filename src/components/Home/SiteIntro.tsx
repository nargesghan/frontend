'use client'
import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import SearchIcon from '@mui/icons-material/Search';


interface Props {
  // define your props here
}

const SiteIntro: React.FC<Props> = (props) => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCategory(event.target.value);
    };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{marginTop:10}}>
      {" "}
      <Grid item xs={6} sx={{paddingLeft:5}}>
        <Typography variant="body1">
          Here, you can easily find job opportunities tailored to your
          preferences.
          <br />
          Start your career journey with us today and explore endless
          possibilities.
        </Typography>
        <Stack direction="row" spacing={0}>
        <TextField id="outlined-basic" label="Search job title" variant="outlined" sx={{borderRadius:0}} />
        <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          sx={{borderRadius:0}}
        >
          <MenuItem value="">
            <em>Category</em>
          </MenuItem>
          <MenuItem value={10}>category 1</MenuItem>
          <MenuItem value={20}>category 2</MenuItem>
          <MenuItem value={30}>category 3</MenuItem>
        </Select>
     
      </FormControl>
      <Button variant="contained" startIcon={<SearchIcon sx={{ fontSize: 100 }} />} sx={{borderRadius:0,boxShadow:'none'}}>
        
      </Button>
      </Stack>
      </Grid>
      <Grid item xs={6}>
        {" "}
        
          <Image
            src="/Home/mainPageImage.png"
            alt="green main vector of page"
            
            style={{
              width: "90%",
              height: "auto",
            }}
            width={637}
            height={637}
         
          />
        
      </Grid>
    </Grid>
  );
};

export default SiteIntro;
