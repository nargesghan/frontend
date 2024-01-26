import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";

interface Props {
  // define your props here
}

const SearchBox: React.FC<Props> = (props) => {
  const [Location, setLocation] = React.useState("");
  const [title, setTitle] = React.useState("");
  
  const router=useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSearch = async () => {
    router.push(`/search-results?title=${title}&location=${Location}`);
  };

  return (
    <Box
      sx={{
        w: "100vh",
        height: "206px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: "secondary.light",
        marginTop: "40px",
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
            sx={{ borderRadius: 0, bgcolor: "#F9F9F9" }}
            onChange={handleTitleChange}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={Location}
              onChange={handleChange}
              displayEmpty
              sx={{ borderRadius: 0, bgcolor: "#F9F9F9" }}
            >
              <MenuItem value="">
                <em>Location</em>
              </MenuItem>

              <MenuItem value="Esfahan">Isfahan</MenuItem>

              <MenuItem value="Shiraz">Shiraz</MenuItem>
              <MenuItem value="Tehran">Tehran</MenuItem>
              <MenuItem value="Mashhad">Mashhad</MenuItem>
              <MenuItem value="Tabriz">Tabriz</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            startIcon={<SearchIcon sx={{ fontSize: 100 }} />}
            sx={{ borderRadius: 0, boxShadow: "none" }}
            onClick={handleSearch}
          ></Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SearchBox;
