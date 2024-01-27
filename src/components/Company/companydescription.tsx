import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


interface Props {
about:string;
}

const Companydescription: React.FC<Props> = ({
about
}) => {
  return (
    <Box
      sx={{
        width: "85%",
        margin: "auto",
        marginY:'50px',
        backgroundColor: "#FFEFF6",
        borderRadius: "10px",
        paddingLeft: "50px",
        paddingTop:'10px',
        boxShadow: 'inset 0 4px 3px rgba(0, 0, 0, 0.25)',
        border: '1px solid #A89FA3',
      }}
    >
      <Box>
        <Typography variant="h2" color="#359C8E">
      
          about the company:
        </Typography>
        <Typography sx={{ padding:'40px' }} >{about}</Typography>
      </Box>
      
    </Box>
  );
};

export default Companydescription;
