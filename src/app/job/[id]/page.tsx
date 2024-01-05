// import { useRouter } from 'next/router'

// export async function getServerSideProps(context) {
//   const { id } = context.query
//   // Fetch data based on the ID
//   const res = await fetch(`https://your-api-endpoint.com/jobs/${id}`)
//   const job = await res.json()

//   return {
//     props: { job }, // will be passed to the page component as props
//   }
// }

import React from 'react';
import ButtonAppBar from '@/components/General/Navbar';

interface Props {
  // define your props here
}

const Page: React.FC<Props> = (props) => {
  return (
    <div>
        <ButtonAppBar/>
      // Your component code goes here
    </div>
  );
}

export default Page;
