import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface Props {
  about: string;
  experience: string;
  education: string;
  certificates: string;
  skills: string;
}

const Resumedetail: React.FC<Props> = ({
  about,
  experience,
  education,
  certificates,
  skills,
}) => {
  return (
    <Box
      sx={{
        width: "85%",
        margin: "auto",
        marginY: "50px",
        backgroundColor: "#FFEFF6",
        borderRadius: "10px",
        paddingLeft: "100px",
        boxShadow:
          "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px",
      }}
    >
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          about me:
        </Typography>
        <Typography
          sx={{ paddingLeft: "70px" }}
        >{about}</Typography>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          work experience:{" "}
        </Typography>
        <ul style={{ paddingLeft: "70px" }}>
          <Typography>{experience}</Typography>
        </ul>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          Education:
        </Typography>
        <ul style={{ paddingLeft: "70px" }}>
          <Typography>{education}</Typography>
        </ul>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          Licenses & certifications:
        </Typography>
        <ul style={{ paddingLeft: "70px" }}>
          <Typography>{certificates}</Typography>
        </ul>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h2" color="#359C8E">
          <FiberManualRecordIcon />
          skills:
        </Typography>
        <ul style={{ paddingLeft: "70px" }}>
          <Typography>{skills}</Typography>
        </ul>
      </Box>
      <Divider />
    </Box>
  );
};

export default Resumedetail;
