import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Props {
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  salary: number;
  date: string;
}

const Jobdescription: React.FC<Props> = ({
  summary,
  responsibilities,
  qualifications,
  salary,
  date,
}) => {
  return (
    <Box sx={{width:'85%',margin:'auto',backgroundColor:'#FFEFF6',borderRadius:'10px',paddingLeft:'100px'}}>
      <Box>
        <Typography><FiberManualRecordIcon/>Job Purpose Summary:</Typography>
        <Typography>{summary}</Typography>
      </Box>
      <Divider  />
      <Box>
        <Typography><FiberManualRecordIcon />Key Responsibilities and Accountabilities: </Typography>
        <ul>  {responsibilities.map((item)=>{return <li key={item}><Typography >{item}</Typography></li>})}</ul>
      </Box>
      <Divider  />
      <Box>
        <Typography><FiberManualRecordIcon/>Required Qualifications:</Typography>
        <ul>  {qualifications.map((item)=>{return <li key={item}><Typography >{item}</Typography></li>})}</ul>
    
      </Box>
      <Divider  />
      <Box>
        <Typography><FiberManualRecordIcon/>salary:</Typography>
        <Typography>{salary}</Typography>
      </Box>
      <Divider  />
    </Box>
  );
};

export default Jobdescription;
