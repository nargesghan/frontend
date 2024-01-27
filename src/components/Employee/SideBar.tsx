"use client";

import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/system";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import InterestsIcon from "@mui/icons-material/Interests";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import  Button  from "@mui/material/Button";

import Link from "next/link";

const ListItemText = styled("span")({
  fontSize: "1rem",
  fontWeight: 400,
  height: "69px",
  display: "flex",
  alignItems: "center",
});

interface Props {
  // define your props here
}

const Sidebar: React.FC<Props> = (props) => {

  const route=useRouter()
  function handleLogOut(){
   localStorage.removeItem('token');
   localStorage.removeItem('userId');
   localStorage.removeItem('userType');
   route.replace('/')
 }

  return (
    <List
      sx={{
        width: "100%",
        height: "fit-content",
        maxWidth: 240,
        bgcolor: "background.paper",
        boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        position: "fixed",
        top: 0,
        left: 0,
        padding: 0,
  
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Link href="/employee/dashboard/submittedresumes">
        <ListItemButton divider={true}>
          <ListItemIcon>
            <ArrowCircleUpIcon />
          </ListItemIcon>
          <ListItemText>Submitted resumes</ListItemText>
        </ListItemButton>
      </Link>
      <Link href="/employee/dashboard/myresume">
        <ListItemButton divider={true}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>My resume</ListItemText>
        </ListItemButton>
      </Link>
      <Link href="/employee/recommendedjobs">
        <ListItemButton divider={true}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText>Recommended jobs</ListItemText>
        </ListItemButton>
      </Link>
      <Link href="/employee/interestedjobs">
        <ListItemButton divider={true}>
          <ListItemIcon>
            <InterestsIcon />
          </ListItemIcon>
          <ListItemText>Interested jobs</ListItemText>
        </ListItemButton>
      </Link>
      <Link href="/employee/dashboard/setting">
        <ListItemButton divider={true}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItemButton>
      </Link>
      <Link href="/">
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <Button onClick={handleLogOut}>
          <ListItemText>Log out</ListItemText></Button>
        </ListItemButton>
      </Link>
    </List>
  );
};

export default Sidebar;
