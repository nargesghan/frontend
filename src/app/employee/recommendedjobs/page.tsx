import React from 'react';
import JobBox from '@/components/Employee/JobBox';

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <div>
      <JobBox   imageURL="/General/digikala.svg"
              title="front-end developer"
              location="Tehran"
              company="Digikala"
              date='24 July 2024'
              id="1"/>
    </div>
  );
}

export default Page;