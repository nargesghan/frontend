import React from "react";
import Input from "@mui/material/Input";
interface Props {
  placeholder: string;
  type: string;
}

const AuthInput: React.FC<Props> = ({ placeholder, type }) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        type={type}
        sx={{
          backgroundColor: "info.contrastText",
          width: "450px",
          height: "60px",
          borderColor: "white-[400]",
          borderWidth: 2,
          borderRadius: '5px',
    
        }}
      />
    </div>
  );
};

export default AuthInput;
