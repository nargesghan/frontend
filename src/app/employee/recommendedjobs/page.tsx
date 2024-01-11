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
    </div>
  );
}

export default Page;