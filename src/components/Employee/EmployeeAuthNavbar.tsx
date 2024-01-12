"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react/";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import TypographyMenu from "./DropDownMenue";

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h2"
            component="h1"
            sx={{ flexGrow: 1, paddingLeft: 10 }}
          >
            JobJob
          </Typography>
          <Typography sx={{ pr: 3 }} variant="body2">
            Mahi Ghermez
          </Typography>
          <Box sx={{ position: "static" }}>
            <Button onClick={handleAvatarClick}>
              {" "}
              <Avatar
                sx={{
                  bgcolor: "info.main",
                  color: "info.dark",
                  marginRight: 10,
                }}
              >
                MG
              </Avatar>
            </Button>

            {menu && <TypographyMenu />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
