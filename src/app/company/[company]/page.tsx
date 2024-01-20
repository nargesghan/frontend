"use client";
import React from "react";
import ButtonAppBar from "@/components/General/EmployeeNavbar";
import Companydescription from "@/components/Company/companydescription";
import { usePathname } from "next/navigation";
import { companies } from "@/MockData/data";
import Companyheader from "@/components/Company/companyheader";

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  let parts = pathname.split("/");
  let id = parts[parts.length - 1];
  console.log(id)
  const Company = companies.find((company) => company.id === id);

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
    </>
  );
}
