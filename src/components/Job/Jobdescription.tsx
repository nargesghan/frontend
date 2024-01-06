import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
    <Box
      sx={{
        width: "85%",
        margin: "auto",
        marginY:'50px',
        backgroundColor: "#FFEFF6",
        borderRadius: "10px",
        paddingLeft: "100px",
        boxShadow: 'blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px',
      }}
    >
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          Job Purpose Summary:
        </Typography>
        <Typography sx={{ paddingLeft: "70px" }}>{summary}</Typography>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          Key Responsibilities and Accountabilities:{" "}
        </Typography>
        <ul style={{ paddingLeft: "70px" }}>
          {" "}
          {responsibilities.map((item) => {
            return (
              <li key={item}>
                <Typography>{item}</Typography>
              </li>
            );
          })}
        </ul>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          Required Qualifications:
        </Typography>
        <ul style={{ paddingLeft: "70px" }}>
          {" "}
          {qualifications.map((item) => {
            return (
              <li key={item}>
                <Typography>{item}</Typography>
              </li>
            );
          })}
        </ul>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          salary:
        </Typography>
        <Typography sx={{ paddingLeft: "70px" }}>{salary}$</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default Jobdescription;
