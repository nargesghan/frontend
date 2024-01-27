'use client'
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

interface SendResumeProps {
  sentResume: boolean;
}

export const SendResume: React.FC<SendResumeProps> = ({ sentResume }) => {
  
  return (
    <>
      {sentResume ? (
        <Button variant="contained" color="secondary" disabled sx={{width:'150px',height:'45px'}}>
          Resume Sent
        </Button>
      ) : (
        <Button variant="contained" color="info" sx={{width:'150px',height:'45px'}}>
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
        <Button variant="outlined" color="info" onClick={Save} sx={{width:'150px',height:'45px'}}>
          Add to favorites
        </Button>
      ) : (
        <Button variant="outlined" color="info" onClick={Save}sx={{width:'150px',height:'45px'}}>
          <BookmarkAddedIcon color='info'/>
        </Button>
      )}
    </>
  );
};

interface ShareProps {}

export const Share: React.FC<ShareProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const copyToClipboard = async () => {
    try {
      
      await navigator.clipboard.writeText(window.location.href);
      console.log('Page URL copied to clipboard');
      setIsClicked(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
    onClick={copyToClipboard}
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
     {isClicked ? 'Copied!' : <ShareIcon fontSize="small"/>}
    </Button>
  );
};
