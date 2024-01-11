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

export default function TypographyMenu() {
  return (
    <Paper  sx={{ width:'160px', bgcolor: "info.light",display:'flex',justifyContent:'center',position:'absolute' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ArrowCircleUpIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">Submitted resumes</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">My resume</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <WorkIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Recommended jobs
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InterestsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Interested jobs
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small"/>
          </ListItemIcon>
          <Typography variant="body2" noWrap>
          Settings
          </Typography>
        </MenuItem>
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
