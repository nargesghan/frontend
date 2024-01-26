'use client'
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ButtonAppBar from "@/components/Employee/EmployeeAuthNavbar";
import SearchBox from "@/components/Employee/SearchBox";
import { Box, Stack } from "@mui/material";
import JobBox from '@/components/Employee/JobBox';

interface Props {
  // define your props here
}

const SearchPage: React.FC<Props> = (props) => {
  const [results, setResults] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const location = searchParams.get("location");
  const [token, setToken] = useState('');
  
  useEffect(() => {
    setToken(localStorage.getItem('token')||'');
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const url = `http://127.0.0.1:8000/api/search-job?title=${title}&location=${location}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Token ${token}`, // assuming token-based authentication
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchResults();
  }, [title, location, token]);
  
  return (
    <>
      <ButtonAppBar />
      <SearchBox />
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        sx={{ marginTop: "50px" }}
      >
        <Box
          width={"1200px"}
          height={80}
          sx={{
            boxShadow:
              " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            paddingX: "5px",
            display: "flex",
            alignItems: "flex-end",
          }}
        ></Box>
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{ bgcolor: "#FAFAFA" }}
          width={"1200px"}
        >
          {" "}
          <div>
            {results.map((job, index) => (
              <JobBox
                key={index}
                imageURL="/General/digikala.svg" // replace with job.imageURL or equivalent if available
                title={job.title}
                location={job?.location}
                company={job.company}
                sentResume={false} // replace with actual value
                liked={false} // replace with actual value
                id={job.id.toString()}
              />
            ))}
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default SearchPage;
