import React from 'react';

interface Props {
  summary:string;
  responsibilities:string[];
  qualifications:string[];
  salary:number;
  date:number;
}

const Jobdescription: React.FC<Props> = ({summary,responsibilities,qualifications,salary,date}) => {
  return (
    <div>
      // Your component code goes here
    </div>
  );
}

export default Jobdescription;