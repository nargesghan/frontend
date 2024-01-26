"use client";
import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";

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
  const titleRef = useRef<HTMLInputElement>(null);
  const salaryRef = useRef<HTMLInputElement>(null);
  const industryRef = useRef<HTMLSelectElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const experienceRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const qualificationsRef = useRef<HTMLTextAreaElement>(null);
  const responsibilitiesRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = "http://127.0.0.1:8000/job/api/create-job";
    const token = localStorage.getItem("token");

    // The data to update the resume
    const data = new FormData();
    data.append("title", titleRef.current?.value || "");
    data.append("salary", salaryRef.current?.value || "");

    data.append("description", descriptionRef.current?.value || "");
    data.append("industry", industryRef.current?.value || "");
    data.append("typeRef", typeRef.current?.value || "");
    data.append("experience", experienceRef.current?.value || "");
    data.append("qualification", qualificationsRef.current?.value || "");
  
    data.append("responsibilities", responsibilitiesRef.current?.value || "");
 

 

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`, 
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
      <form onSubmit={handleSubmit}>
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
                ref={titleRef}
                placeholder="title*"
                id="title"
                type="text"
                required
              ></Input>
              <Label htmlFor="salary">salary</Label>
              <Input
                ref={salaryRef}
                placeholder="1000$"
                id="salary"
                type="number"
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
              <Label htmlFor="type">Job type</Label>
              <select
                ref={typeRef}
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
                <option value="Remote">remote</option>
                <option value="Onsite">onsite</option>
                <option value="Hybrid">hybrid</option>
              </select>
              <Label htmlFor="experience">Job experience needed</Label>
              <select
                ref={experienceRef}
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
                <option value="Intern">Intern</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                
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
              ref={descriptionRef}
              placeholder={"Write something about the job"}
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
              ref={qualificationsRef}
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
              ref={responsibilitiesRef}
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
