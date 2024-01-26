"use client";
import React, { useState, useRef } from "react";
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const locationRef = useRef<HTMLSelectElement>(null);
  const sizeRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const industryRef = useRef<HTMLSelectElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLTextAreaElement>(null);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = "http://127.0.0.1:8000/company/api/update-company/";
    const token = localStorage.getItem("token");

    // The data to update the resume
    const data = new FormData();

    data.append("name", nameRef.current?.value || "");
    data.append("industry", industryRef.current?.value || "");
    data.append("website", websiteRef.current?.value || "");
    data.append("about", aboutRef.current?.value || "");
    data.append("location", locationRef.current?.value || "");
    data.append("size", sizeRef.current?.value || "");
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      data.append("logo", fileInputRef.current.files[0]);
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`, // assuming token-based authentication
      },
      body: data,
    });

    if (!response.ok) {
      // Handle error...
      console.error("Error:", response.statusText);
    } else {
      const responseData = await response.json();
      console.log(responseData);
    }
  };

  return (
    <Box sx={{ marginTop: "200px", display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
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
        <form onSubmit={handleSubmit}>
          <Stack spacing={"10px"}>
            <Label htmlFor={"name"}>Name*</Label>
            <Input
              ref={nameRef}
              placeholder="company name*"
              id="name"
              type="text"
              required
            ></Input>

            {/* <Label htmlFor="phone">Phone number</Label>
            <Input placeholder="09119392284" id="phone" type="text"></Input>
            <Label htmlFor="birthdate">Birth date</Label>
            <Input
              placeholder="Please select"
              id="birthdate"
              type="date"
            ></Input> */}
            <Label htmlFor="companySize">Company Size</Label>
            <select
              ref={sizeRef}
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
              <option value="">--Please choose an option--</option>
              <option value="-10">Less than 10</option>
              <option value="10-50">10-50 employees</option>
              <option value="50-200">50-200 employees</option>
              <option value="200-500">200-500 employees</option>
              <option value="500+">More than 500</option>
            </select>

            <Label htmlFor="location">Province</Label>
            <select
              ref={locationRef}
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
              <option value="Esfahan">Isfahan</option>

              <option value="Shiraz">Shiraz</option>
              <option value="Tehran">Tehran</option>
              <option value="Mashhad">Mashhad</option>
              <option value="Tabriz">Tabriz</option>
            </select>
            <Label htmlFor="website">Website</Label>
            <Input
              ref={websiteRef}
              placeholder="website"
              id="website"
              type="text"
            ></Input>
            <Label htmlFor="industry">Industry</Label>
            <select
              ref={industryRef}
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
              ref={aboutRef}
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
