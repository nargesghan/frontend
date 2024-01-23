"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";

const Input = styled("input")({
  width: "507px",
  height: "50px",
  padding: "20px",
  borderRadius: "5px",
  backgroundColor: "#F9F9F9",
  border: "solid",
  borderWidth: "1px",
  borderColor: "#E6E6E6",
});

const Label = styled("label")({
  height: "24px",
  fontSize: "14px",
  color: "#252B42",
  fontWeight: 500,
});

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFabClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };
  return (
    <Box sx={{ marginTop: "200px", display: "flex", flexDirection: "row" }}>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'50%'}}>
        <Image
          src="/General/employerAuthbackground.jpg"
          alt="employer vector"
          width={700}
          height={700}
          style={{ width: "100%", height: "max-content" }}
        ></Image>
      </Box>

      <Box
        sx={{
          border: "solid",
          width: "610px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "1200px",
          borderColor: "#0EC5D7",
          padding: "15px",
        }}
      >
        <form>
          <Stack spacing={"10px"}>
            <Label htmlFor={"name"}>Name*</Label>
            <Input
              placeholder="Full name*"
              id="name"
              type="text"
              required
            ></Input>
            <Label htmlFor="email">Email address*</Label>
            <Input
              placeholder="example@gmail.com"
              id="email"
              type="email"
              required
            ></Input>
            <Label htmlFor="phone">Phone number</Label>
            <Input placeholder="09119392284" id="phone" type="text"></Input>
            <Label htmlFor="birthdate">Birth date</Label>
            <Input
              placeholder="Please select"
              id="birthdate"
              type="date"
            ></Input>
            <Label htmlFor="companySize">Company Size</Label>
            <select
              name="companySize"
              id="companySize"
              style={{
                width: "507px",
                height: "50px",
                paddingLeft: "20px",
                borderRadius: "5px",
                backgroundColor: "#F9F9F9",
                border: "solid",
                borderWidth: "1px",
                borderColor: "#E6E6E6",
              }}
            >
              <option value="1">--Please choose an option--</option>
              <option value="2">less than 10</option>
              <option value="3">10-20</option>
              <option value="4">20-50</option>
              <option value="5">50-100</option>
              <option value="6">more than 100</option>
            </select>

            <Label htmlFor="location">Province</Label>
            <select
              name="location"
              id="location"
              style={{
                width: "507px",
                height: "50px",
                paddingLeft: "20px",
                borderRadius: "5px",
                backgroundColor: "#F9F9F9",
                border: "solid",
                borderWidth: "1px",
                borderColor: "#E6E6E6",
              }}
            >
              <option value="">--Please choose an option--</option>
              <option value="Alborz">Alborz</option>
              <option value="Ardabil">Ardabil</option>
              <option value="East Azerbaijan">East Azerbaijan</option>
              <option value="West Azerbaijan">West Azerbaijan</option>
              <option value="Bushehr">Bushehr</option>
              <option value="Chahar Mahaal and Bakhtiari">
                Chahar Mahaal and Bakhtiari
              </option>
              <option value="Fars">Fars</option>
              <option value="Gilan">Gilan</option>
              <option value="Golestan">Golestan</option>
              <option value="Hamadan">Hamadan</option>
              <option value="Hormozgan">Hormozgan</option>
              <option value="Ilam">Ilam</option>
              <option value="Isfahan">Isfahan</option>
              <option value="Kerman">Kerman</option>
              <option value="Kermanshah">Kermanshah</option>
              <option value="North Khorasan">North Khorasan</option>
              <option value="Razavi Khorasan">Razavi Khorasan</option>
              <option value="South Khorasan">South Khorasan</option>
              <option value="Khuzestan">Khuzestan</option>
              <option value="Kohgiluyeh and Boyer-Ahmad">
                Kohgiluyeh and Boyer-Ahmad
              </option>
              <option value="Kurdistan">Kurdistan</option>
              <option value="Lorestan">Lorestan</option>
              <option value="Markazi">Markazi</option>
              <option value="Mazandaran">Mazandaran</option>
              <option value="Qazvin">Qazvin</option>
              <option value="Qom">Qom</option>
              <option value="Semnan">Semnan</option>
              <option value="Sistan and Baluchestan">
                Sistan and Baluchestan
              </option>
              <option value="Tehran">Tehran</option>
              <option value="Yazd">Yazd</option>
              <option value="Zanjan">Zanjan</option>
            </select>
            <Label htmlFor="website">Website</Label>
            <Input placeholder="website" id="website" type="text"></Input>
            <Label htmlFor="industry">Industry</Label>
            <select
              name="industry"
              id="industry"
              style={{
                width: "507px",
                height: "50px",
                paddingLeft: "20px",
                borderRadius: "5px",
                backgroundColor: "#F9F9F9",
                border: "solid",
                borderWidth: "1px",
                borderColor: "#E6E6E6",
              }}
            >
              <option value="chemical">Chemical</option>
              <option value="fation">fation</option>
              <option value="entertainment">entertainment</option>
              <option value="financial">financial</option>
              <option value="computer">computer</option>
              <option value="health">health</option>
              <option value="media">media</option>
              <option value="food">food</option>
            </select>
            <Label htmlFor="about">about</Label>
            <textarea
              placeholder={"about the company"}
              id="about"
              name="about"
              rows={4}
              style={{
                width: "507px",
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#F9F9F9",
                border: "solid",
                borderWidth: "1px",
                borderColor: "#E6E6E6",
              }}
            ></textarea>
            <Label htmlFor="profilephoto" style={{ display: "block" }}>
              Company logo:
            </Label>
            <Fab
              size="medium"
              color="secondary"
              aria-label="add"
              onClick={handleFabClick}
            >
              <AddIcon />
            </Fab>
            {fileName && (
              <span style={{ fontSize: "14px" }}>
                Uploaded file: {fileName}
              </span>
            )}
            <input
              ref={fileInputRef}
              type="file"
              name="profilephoto"
              id="profilephoto"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            ></input>
          </Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
           
            }}
          >
            {" "}
            <input
              type="submit"
              value={"save changes"}
              style={{
                width: "182px",
                height: "58px",
                backgroundColor: "#0EC5D7",
                border: "none",
                color: "#FFFFFF",
                
              }}
            ></input>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Page;
