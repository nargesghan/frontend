'use client'
import  Box  from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthButton from "@/components/authentication/AuthButton";
import AuthInput from "@/components/authentication/AuthInput";

export default function Page() {
  const imageUrl = "/authentication/signup.svg";

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
          <AuthInput placeholder="   Username" type='string'></AuthInput>
        </Grid>
        <Grid item><AuthInput placeholder="   Your Email" type='email'></AuthInput></Grid>
        <Grid item><AuthInput placeholder="   Password" type='password'></AuthInput></Grid>
        <Grid item><AuthInput placeholder="   Confirm Password" type='password'></AuthInput></Grid>
        <Grid item container justifyContent="flex-end" sx={{paddingRight:'200px'}}>  <AuthButton name={'Sign Up'}/></Grid>
      </Grid>
    
    </Box>
  );
}
