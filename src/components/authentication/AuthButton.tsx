import React from "react";
import Link from "next/link";
import  Button  from "@mui/material/Button";

interface Props {
  name: string;
}

const AuthButton: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <Link href={"/authentication/signup"}>
        {" "}
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "info.dark", fontWeight: 700 }}
        >
          {name}
        </Button>
      </Link>
    </div>
  );
};

export default AuthButton;
