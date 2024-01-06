import React from "react";
import ButtonAppBar from "@/components/General/Navbar";
import Jobheader from "@/components/Job/Jobheader";
import Grid from "@mui/material/Grid";
import jobs from "@/MockData/data";
import Jobdescription from "@/components/Job/Jobdescription";
import JobBox from "@/components/General/JobBox";

export default function Page({ params }: { params: { id: string } }) {
  const Job = jobs.find((job) => job.id === params.id);

  if (!Job) {
    return <>page not found</>;
  }
  return (
    <>
      <ButtonAppBar />
      <Jobheader
        imageURL={Job?.imageURL}
        title={Job?.title}
        company={Job?.company}
        location={Job?.location}
        website={Job?.website}
      />
      <Jobdescription
        summary={Job?.summary}
        responsibilities={Job?.responsibilities}
        qualifications={Job?.qualifications}
        salary={Job?.salary}
        date={Job?.date.toDateString()}
      />
      {/* related job advertisements */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {jobs.map(({ imageURL, title, location, company, date, id }, index) => {
          if (index < 3) {
            return (
              <Grid item xs={12} sm={4} md={4} key={id}>
                <JobBox
                  imageURL={imageURL}
                  title={title}
                  location={location}
                  company={company}
                  date={date.toDateString()}
                  id={id}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </>
  );
}
