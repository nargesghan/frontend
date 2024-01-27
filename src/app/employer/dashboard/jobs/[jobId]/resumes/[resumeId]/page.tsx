import React from "react";
import Resumedetail from "@/components/Resume/Resumedetail";
import Resumeheader from "@/components/Resume/Resumeheader";

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <div>
        <Resumeheader image='/General/Profile.png' firstname="mahi" lastname="Ghermez" city='Tehran' website="mahighermez.com" email='mahi@ghermez.com' phonnumber="09909978898"/>
      <Resumedetail
        about={`A highly motivated and experienced web developer, currently looking to resume my professional career after an excellent maternity leave. Excellent problem-solving skills and a proven track record in managing teams and maintaining high-quality standards in projects. Seeking a suitable position with a progressive employer where I can utilize my skills and experience.
`}
        experience={`teaching assistant , back-end developer , Hello world writer!`}
        education={`I am illiterate`}
        certificates={`python for begginers , programming for begginers , .....`}
        skills={`python , c++ , Git`}
      />
    </div>
  );
};

export default Page;
