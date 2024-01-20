'use client'
import React from "react";
import { Box, Grid} from "@mui/material";
import Link from "next/link";
import AuthInput from "@/components/authentication/AuthInput";
import AuthButton from "@/components/authentication/AuthButton";

const imageUrl = "/authentication/login.svg";
export default function Page() {


  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        direction='column'
        spacing={4}
        
        sx={{
          backgroundImage: `url(${imageUrl})`,
          height: "80%",
          width: "80%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Grid item>
          <AuthInput placeholder="   email" type='email'></AuthInput>
        </Grid>
        <Grid item><AuthInput placeholder="   Password" type='password'></AuthInput></Grid>
        <Grid item><Link href={'/'}>Forgot Password</Link></Grid>
        <Grid item container justifyContent="flex-end" sx={{paddingRight:'200px'}}>  <AuthButton name={'Log in'}/></Grid>
      </Grid>
    
    </Box>
  );
}
