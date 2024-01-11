import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';

interface Props {
  // define your props here
}

const SearchBox: React.FC<Props> = (props) => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCategory(event.target.value);
    };
  return (
    <Box
      sx={{
        w: "100vh",
        height: "206px",
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        flexDirection:'column',
        bgcolor:'secondary.light',
      }}
    >
      <Typography variant="h2" sx={{}}>
        Search Jobs
        </Typography>
        <form>
        <Stack direction="row" spacing={0}>
          <TextField
            id="outlined-basic"
            label="Search job title"
            variant="outlined"
            sx={{ borderRadius: 0 ,bgcolor:'#F9F9F9'}}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={category}
              onChange={handleChange}
              displayEmpty
              sx={{ borderRadius: 0,bgcolor:'#F9F9F9' }}
            >
              <MenuItem value="">
                <em>Category</em>
              </MenuItem>
              <MenuItem value={10}>category 1</MenuItem>
              <MenuItem value={20}>category 2</MenuItem>
              <MenuItem value={30}>category 3</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            startIcon={<SearchIcon sx={{ fontSize: 100 }} />}
            sx={{ borderRadius: 0, boxShadow: "none" }}
          ></Button>
        </Stack>
        </form>
      
    </Box>
  );
};

export default SearchBox;
