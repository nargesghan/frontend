"use client";
import React from "react";
import ButtonAppBar from "@/components/General/EmployeeNavbar";
import Companydescription from "@/components/Company/companydescription";
import { usePathname } from "next/navigation";
import { companies } from "@/MockData/data";
import Companyheader from "@/components/Company/companyheader";
import  Grid  from "@mui/material/Grid";
import JobBox from "@/components/General/JobBox";
import Divider from '@mui/material/Divider';

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  let parts = pathname.split("/");
  let id = parts[parts.length - 1];
  console.log(id)
  const Company = companies.find((company) => company.id === id);
  const jobs=Company?.jobs;
  console.log(jobs)
  if (!Company) {
    return <>page not found</>;
  }
  return (
    <>
      <ButtonAppBar />
      <Companyheader
        imageURL={Company?.imageURL}
        name={Company?.name}
        size={Company?.size}
        location={Company?.location}
        website={Company?.website}
        industry={Company.industry}
  
      />
      <Companydescription
        about={Company?.about}
      />
       <Divider sx={{color:'info.main'}}>Job ads of this company</Divider>
      {/* add Job opportunities when api is ready */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {jobs?.map(({ imageURL, title, location, company, date,id }) => (
          <Grid item xs={12}  sm={4} md={4} key={id}>
            <JobBox
              imageURL={imageURL}
              title={title}
              location={location}
              company={company}
              date={date.toDateString()}
              id={id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
