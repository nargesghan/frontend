import React from 'react';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
interface SendResumeProps {
  // define your props here
}

export const SendResume: React.FC<SendResumeProps> = (props) => {
  return (
    <Button variant="contained" color='info'>Send resume</Button>
  );
}

interface AddToFavoritesProps{

}

export const AddToFavorites: React.FC<AddToFavoritesProps> = (props) => {
    return (
        <Button variant="outlined" color='info'>Add to favorites</Button>
    );
  }
  
  interface ShareProps{

  }

  export const Share: React.FC<ShareProps> = (props) => {
    return (
        <Button variant="contained" sx={{borderRadius:'50%'}} startIcon={<ShareIcon />} color='info'>
        
      </Button>
    );
  }

