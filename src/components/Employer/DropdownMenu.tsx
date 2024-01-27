import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import LogoutIcon from "@mui/icons-material/Logout";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Link from "next/link";
import {  useRouter } from "next/navigation";
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
    <Paper  sx={{ width:'200px', bgcolor: "info.light",display:'flex',justifyContent:'center',position:'absolute',right:'10px',top:'70px' }}>
      <MenuList>
      <Link href="/employer/dashboard/jobs">
        <MenuItem>
          <ListItemIcon>
          <WorkIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">view all jobs</Typography>
        </MenuItem>
        </Link>
      <Link href="/employer/dashboard/addnewad">
        <MenuItem>
          <ListItemIcon>
            <CloudUploadIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">post a new job</Typography>
        </MenuItem>
        </Link>
      <Link href="/employer/dashboard/editcompany">
        <MenuItem>
          <ListItemIcon>
            <ModeEditOutlineIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Edit company desciption
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
