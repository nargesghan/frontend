"use client";
import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
interface Props {
  // define your props here
}

const SiteIntro: React.FC<Props> = (props) => {
  const [Location, setLocation] = React.useState("");
  const [title, setTitle] = React.useState("");

  const router = useRouter();

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
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 10 }}
    >
      {" "}
      <Grid item xs={6} sx={{ paddingLeft: 5 }}>
        <Typography variant="body1">
          Here, you can easily find job opportunities tailored to your
          preferences.
          <br />
          Start your career journey with us today and explore endless
          possibilities.
        </Typography>
        <Stack direction="row" spacing={0}>
          <TextField
            id="outlined-basic"
            label="Search job title"
            variant="outlined"
            sx={{ borderRadius: 0 }}
            onChange={handleTitleChange}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={Location}
              onChange={handleChange}
              displayEmpty
              sx={{ borderRadius: 0 }}
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
      </Grid>
      <Grid item xs={6}>
        {" "}
        <Image
          src="/Home/mainPageImage.png"
          alt="green main vector of page"
          style={{
            width: "90%",
            height: "auto",
          }}
          width={637}
          height={637}
        />
      </Grid>
    </Grid>
  );
};

export default SiteIntro;
