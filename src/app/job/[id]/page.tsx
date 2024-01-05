import React from "react";
import ButtonAppBar from "@/components/General/Navbar";
import Jobheader from "@/components/Job/Jobheader";

import jobs from "@/MockData/data";

type Job = {
  id: number;
  imageURL: string;
  title: string;
  location: string;
  company: string;
  date: Date;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  salary: number;
  website: string;
  path: string;
};

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <ButtonAppBar />
      <Jobheader
        imageURL={jobs[params.id]?.imageURL}
        title={jobs[params.id]?.title}
        company={jobs[params.id]?.company}
        location={jobs[params.id]?.location}
        website={jobs[params.id]?.website}
      />
    </>
  );
}
