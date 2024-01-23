"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionIcon from '@mui/icons-material/Description';

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

const Title = styled("span")({
  fontSize: "24px",
  fontWeight: 700,
  color: "#0EC5D7",
});

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {


  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1158px",
        marginTop: "200px",
        display: "flex",
        alignItems: "center",
   
        flexDirection: "column",
      }}
    >
      <form>
        <Stack spacing={"19px"}>
          <Box
            sx={{
              border: "solid",
              width: "610px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "700px",
              borderColor: "#0EC5D7",
              padding: "15px",
            }}
          >
            <DescriptionIcon sx={{ color: "#0EC5D7" }} fontSize="large" />
            <Title>Basic information</Title>
            <Stack spacing={"10px"}>
              <Label htmlFor={"title"}>Title of the job</Label>
              <Input
                placeholder="title*"
                id="title"
                type="text"
                required
              ></Input>
              <Label htmlFor="salary">salary</Label>
              <Input
                placeholder="1000$"
                id="salary"
                type="text"
              ></Input>
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
            <Label htmlFor="type">Job type</Label>
            <select
              name="type"
              id="type"
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
              <option value="1">contract</option>
              <option value="2">full time</option>
              <option value="3">part time</option>
           
            </select>
            <Label htmlFor="experience">Job experience needed</Label>
            <select
              name="experience"
              id="experience"
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
              <option value="0">No experience required</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">more than 3 Years</option>
            </select>
             
            </Stack>
          </Box>
          <Box
            sx={{
              border: "solid",
              width: "610px",
              display: "flex",
              alignItems: "center",
              borderColor: "#0EC5D7",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <DriveFileRenameOutlineIcon
              sx={{ color: "#0EC5D7" }}
              fontSize="large"
            />
            <Title>description</Title>
            <Label htmlFor="description" style={{ display: "none" }}>
              description
            </Label>
            <textarea
              placeholder={"wWrite something about the job"}
              id="description"
              name="description"
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
          </Box>
          <Box
            sx={{
              border: "solid",
              width: "610px",
              display: "flex",
              alignItems: "center",
              borderColor: "#0EC5D7",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <HowToRegIcon sx={{ color: "#0EC5D7" }} fontSize="large" />
            <Title>qualifications</Title>{" "}
            <Label style={{ display: "none" }} htmlFor="qualifications">
              qualifications
            </Label>
            <textarea
              placeholder="qualifications"
              id="qualifications"
              name="qualifications"
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
          </Box>
          <Box
            sx={{
              border: "solid",
              width: "610px",
              display: "flex",
              alignItems: "center",
              borderColor: "#0EC5D7",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <WorkIcon sx={{ color: "#0EC5D7" }} fontSize="large" />
            <Title>Resposibilities</Title>{" "}
            <Label style={{ display: "none" }} htmlFor="resposibilities">
              responsibilities
            </Label>
            <textarea
              placeholder="resposibilities"
              id="resposibilities"
              name="resposibilities"
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
          </Box>
      
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
        </Stack>
      </form>
    </Box>
  );
};

export default Page;
