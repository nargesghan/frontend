"use client";
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import ButtonAppBar from "@/components/General/EmployerNavbar";
const imageUrl = "/authentication/login.svg";

const Input = styled("input")({
  width: "507px",
  height: "50px",
  padding: "20px",
  borderRadius: "5px",
  backgroundColor: "#F9F9F9",
  border: "solid",
  borderWidth: "1px",
  borderColor: "#E6E6E6",
});

const Label = styled("label")({
  height: "24px",
  fontSize: "14px",
  color: "#252B42",
  fontWeight: 500,
  display: "block",
});

export default function Page() {
  return (
    <>
      <ButtonAppBar />
      <Box
        sx={{
          backgroundImage: `url(/General/employerAuthbackground.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "0.5",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: "solid",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderColor: "#0EC5D7",
            padding: "15px",
            backgroundColor: "info.contrastText",
          }}
        >
          <form>
            <Label htmlFor={"email"}>Email address</Label>
            <Input placeholder="email" id="email" type="email" required></Input>
            <Label htmlFor={"password"}>password</Label>
            <Input
              placeholder="password"
              id="password"
              type="password"
              required
            ></Input>
            <Box sx={{display:'flex',justifyContent:'center'}}>   <input
              type="submit"
              value={"login"}
              style={{
                width: "123px",
                height: "58px",
                backgroundColor: "#0EC5D7",
                border: "none",
                color: "#FFFFFF",
                borderRadius:'5px',
                margin:'15px'
              }}
            ></input></Box>
         
          </form>
        </Box>
      </Box>
    </>
  );
}
