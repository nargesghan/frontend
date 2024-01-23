"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react/";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";
import { Button } from "@mui/material";
import TypographyMenu from "./DropdownMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ButtonAppBar() {
  const [menu, setMenu] = useState(false);
  function handleAvatarClick() {
    setMenu((lastMenu) => !lastMenu);
    console.log(menu)
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h2"
            component="h1"
            sx={{ flexGrow: 1, paddingLeft: 10 }}
          >
            JobJob
          </Typography>
          
          <Box sx={{ position: "static" }}>
            <Button onClick={handleAvatarClick}>
              {" "}
            <Image alt='company logo' src='https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg' width={78} height={78}></Image>
            </Button>

            {menu && <TypographyMenu />}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
