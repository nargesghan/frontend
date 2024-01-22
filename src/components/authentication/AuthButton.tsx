import React from "react";

import  Button  from "@mui/material/Button";

interface Props {
  name: string;
disabled:boolean;
}

const AuthButton: React.FC<Props> = ({ name,disabled }) => {
  return (
    <div>

        <Button
          variant="contained"
          disabled={disabled}
          type='submit'
          size="large"
          sx={{ backgroundColor: "info.dark", fontWeight: 700 }}
       
        >
          {name}
        </Button>

    </div>
  );
};

export default AuthButton;
