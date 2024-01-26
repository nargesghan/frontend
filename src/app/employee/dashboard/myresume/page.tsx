"use client";
import React, { useRef, useState } from "react";
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

  const [fileName, setFileName] = useState<string | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLSelectElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const educationRef = useRef<HTMLInputElement>(null);
  const licensesRef = useRef<HTMLInputElement>(null);
  const resumeRef = useRef<HTMLInputElement>(null);

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

    const url = 'http://127.0.0.1:8000/resume/api/update-resume/'
  const token = localStorage.getItem('token'); 

  // The data to update the resume
  const data = new FormData();
  data.append('name', nameRef.current?.value|| '');
  data.append('email', emailRef.current?.value|| '');
  data.append('phone', phoneRef.current?.value|| '');
  data.append('birthdate', birthDateRef.current?.value|| '');
  data.append('location', locationRef.current?.value|| '');
  if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
    data.append('profilephoto', fileInputRef.current.files[0]);
  }
  data.append('about',aboutRef.current?.value||'');
  data.append('skills',skillsRef.current?.value ||'');
  data.append('experience',experienceRef.current?.value ||'');
  data.append('education',educationRef.current?.value ||'');
  data.append('license',licensesRef.current?.value ||'');

  if (resumeRef.current?.files && resumeRef.current.files.length > 0) {
    data.append('resume', resumeRef.current.files[0]);
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Token ${token}`, 
    },
    body: data,
  });

  if (!response.ok) {
    // Handle error...
    console.error('Error:', response.statusText);
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
        marginLeft: "250px",
        marginTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
            <PersonIcon sx={{ color: "#0EC5D7" }} fontSize="large" />
            <Title>Personal information</Title>
            <Stack spacing={"10px"}>
              <Label htmlFor={"name"}>Name*</Label>
              <Input
              ref={nameRef}
                placeholder="Full name*"
                id="name"
                type="text"
                required
              ></Input>
              <Label htmlFor="email">Email address*</Label>
              <Input
              ref={emailRef}
                placeholder="example@gmail.com"
                id="email"
                type="email"
                required
              ></Input>
              <Label htmlFor="phone">Phone number</Label>
              <Input ref={phoneRef} placeholder="09119392284" id="phone" type="text"></Input>
              <Label htmlFor="birthdate">Birth date</Label>
              <Input
              ref={birthDateRef}
                placeholder="Please select"
                id="birthdate"
                type="date"
              ></Input>
              <Label htmlFor="location">Location</Label>
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
              <Label htmlFor="profilephoto" style={{ display: "block" }}>
                Profile photo
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
            <Title>about me</Title>
            <Label htmlFor="about" style={{ display: "none" }}>
              about
            </Label>
            <textarea
            ref={aboutRef}
              placeholder={"write something about yourself"}
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
            <Title>skills</Title>{" "}
            <Label style={{ display: "none" }} htmlFor="skill">
              skill
            </Label>
            <Input
            ref={skillsRef}
              placeholder="skill"
              id="skill"
              name="skill"
              type="text"
            ></Input>
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
            <Title>work experience</Title>{" "}
            <Label style={{ display: "none" }} htmlFor="experience">
              experience
            </Label>
            <Input
            ref={experienceRef}
              placeholder="experience"
              id="experience"
              name="experience"
              type="text"
            ></Input>
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
            <SchoolIcon sx={{ color: "#0EC5D7" }} fontSize="large" />
            <Title>Education</Title>{" "}
            <Label style={{ display: "none" }} htmlFor="education">
              education
            </Label>
            <Input
            ref={educationRef}
              placeholder="education"
              id="education"
              name="education"
              type="text"
            ></Input>
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
            <CardMembershipIcon sx={{ color: "#0EC5D7" }} fontSize="large" />
            <Title>Licenses & certifications</Title>{" "}
            <Label style={{ display: "none" }} htmlFor="certificates">
              certificates
            </Label>
            <Input
            ref={licensesRef}
              placeholder="certificates"
              id="certificates"
              name="certificates"
              type="text"
            ></Input>
          </Box>
          <Box
            sx={{
              border: "dashed",
              width: "610px",
              display: "flex",
              alignItems: "center",
              borderColor: "#0EC5D7",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <CloudUploadIcon sx={{ color: "#0EC5D7" }} fontSize="large" />
            <Title>Uoload Resume</Title>{" "}
            <Label style={{ display: "none" }} htmlFor="resume">
              resume
            </Label>
            <Input
            ref={resumeRef}
              placeholder="resume"
              id="resume"
              name="resume"
              type="file"
            ></Input>
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
