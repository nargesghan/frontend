'use client'
import React, { useEffect, useState } from 'react';
import JobBox from '@/components/Employee/JobBox';

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  const [jobs, setJobs] = useState<any[]>([]); // State to store the jobs
  const userId=localStorage.getItem('userId');
  const token=localStorage.getItem('token');

  useEffect(() => {
    const fetchJobs = async () => {
      const url = `http://127.0.0.1:8000/resume/api/recommended-jobs/${userId}`; 


      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`, // assuming token-based authentication
        },
      });

      if (response.ok) {
        const data = await response.json();
        setJobs(data.recommended_jobs);
      } else {
        console.error('Error:', response.statusText);
      }
    };

    fetchJobs();
  }, []); 
if (jobs.length==0){return (
  <div>
    <JobBox   imageURL="/General/digikala.svg"
            title="front-end developer"
            location="Tehran"
            company="Digikala"
            sentResume={false}
            liked={true}
            id="1"/>
             <JobBox   imageURL="/General/digikala.svg"
            title="front-end developer"
            location="Tehran"
            company="Digikala"
            sentResume={true}
            liked={true}
            id="1"/>
                 <JobBox   imageURL="/General/digikala.svg"
            title="front-end developer"
            location="Tehran"
            company="Digikala"
            sentResume={true}
            liked={false}
            id="1"/>
                        <JobBox   imageURL="/General/digikala.svg"
            title="front-end developer"
            location="Tehran"
            company="Digikala"
            sentResume={true}
            liked={false}
            id="1"/>
                        <JobBox   imageURL="/General/digikala.svg"
            title="front-end developer"
            location="Tehran"
            company="Digikala"
            sentResume={true}
            liked={false}
            id="1"/>
  </div>
)}
  return (
    <div>
    {jobs.map((job, index) => (
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
  );
}

export default Page;