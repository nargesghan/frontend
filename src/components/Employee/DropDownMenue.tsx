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
import Link from "next/link";
import { useRouter } from "next/navigation";
import  Button  from "@mui/material/Button";

export default function TypographyMenu() {
  const route=useRouter()
  function handleLogOut(){
   localStorage.removeItem('token');
   localStorage.removeItem('userId');
   localStorage.removeItem('userType');
   route.replace('/')
 }
  return (
    <Paper  sx={{ width:'160px', bgcolor: "info.light",display:'flex',justifyContent:'center',position:'absolute' }}>
      <MenuList>
      <Link href="/employee/dashboard/submittedresumes">
        <MenuItem>
          <ListItemIcon>
            <ArrowCircleUpIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">Submitted resumes</Typography>
        </MenuItem>
        </Link>
      <Link href="/employee/dashboard/myresume">
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">My resume</Typography>
        </MenuItem>
        </Link>
      <Link href="/employee/recommendedjobs">
        <MenuItem>
          <ListItemIcon>
            <WorkIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Recommended jobs
          </Typography>
        </MenuItem>
        </Link>
      <Link href="/employee/interestedjobs">
        <MenuItem>
          <ListItemIcon>
            <InterestsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Interested jobs
          </Typography>
        </MenuItem>
        </Link>
      <Link href="/employee/dashboard/setting">
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
          <Button onClick={handleLogOut}>
          <Typography variant="body2" noWrap>
          Log out
          </Typography>
          </Button>
        </MenuItem>
       
      </MenuList>
    </Paper>
  );
}
