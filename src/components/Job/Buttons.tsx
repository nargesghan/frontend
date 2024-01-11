import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
interface SendResumeProps {
  sentResume: boolean;
}

export const SendResume: React.FC<SendResumeProps> = ({sentResume}) => {
  return (
    <>
      {sentResume ? (
        <Button variant="contained" color="secondary">
          Resume Sent
        </Button>
      ) : (
        <Button variant="contained" color="info">
          Send Resume
        </Button>
      )}
    </>
  );
};

interface AddToFavoritesProps {
  liked: boolean;
}

export const AddToFavorites: React.FC<AddToFavoritesProps> = ({ liked }) => {
  return (
    <Button variant="outlined" color="info">
      Add to favorites
    </Button>
  );
};

interface ShareProps {}

export const Share: React.FC<ShareProps> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "50%",
        // Set width and height to be equal, ensuring a circular shape
        width: "45px", // Adjust the value as needed
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      color="info"
    >
      <ShareIcon />
    </Button>
  );
};
