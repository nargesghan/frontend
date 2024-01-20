import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import InterestsIcon from "@mui/icons-material/Interests";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Link from "next/link";


export default function TypographyMenu() {
  return (
    <Paper  sx={{ width:'200px', bgcolor: "info.light",display:'flex',justifyContent:'center',position:'absolute',right:'10px',top:'70px' }}>
      <MenuList>
      <Link href="/employer/dashboard/viewjobs">
        <MenuItem>
          <ListItemIcon>
          <WorkIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">view all jobs</Typography>
        </MenuItem>
        </Link>
      <Link href="/employee/dashboard/post">
        <MenuItem>
          <ListItemIcon>
            <CloudUploadIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">post a new job</Typography>
        </MenuItem>
        </Link>
      <Link href="/employee/edit">
        <MenuItem>
          <ListItemIcon>
            <ModeEditOutlineIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Edit company desciption
          </Typography>
        </MenuItem>
        </Link>
      
      <Link href="/employee/dashboard/settings">
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Settings
          </Typography>
        </MenuItem>
        </Link>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Log out
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
