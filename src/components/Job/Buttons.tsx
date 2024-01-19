'use client'
import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useState } from "react";
interface SendResumeProps {
  sentResume: boolean;
}

export const SendResume: React.FC<SendResumeProps> = ({ sentResume }) => {
  return (
    <>
      {sentResume ? (
        <Button variant="contained" color="secondary" disabled>
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
  const [like,setLike]=useState(liked)
  function Save(){
    setLike((last) => !last);
  }
  return (
    <>
      {like ? (
        <Button variant="outlined" color="info" onClick={Save}>
          Add to favorites
        </Button>
      ) : (
        <Button variant="outlined" color="info" onClick={Save}>
          <BookmarkAddedIcon color='info'/>
        </Button>
      )}
    </>
  );
};

interface ShareProps {}

export const Share: React.FC<ShareProps> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "50%",
        width: "40px", 
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:0
      }}
      color="info"
    >
      <ShareIcon fontSize="small"/>
    </Button>
  );
};
