import React from "react";
import Box from "@mui/material/Box";
interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1158px",
        backgroundColor: "red",
        marginLeft: "20%",
      }}
    >
      submitted resumes
    </Box>
  );
};

export default Page;
