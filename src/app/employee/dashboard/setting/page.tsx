import React from 'react';
import  Box  from '@mui/material/Box';
interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <Box
    sx={{
      width: "90%",
      maxWidth: "1158px",
      marginLeft: "250px",
      marginTop: "5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
      setting page
      in this page you can change your password !
    </Box>
  );
}

export default Page;