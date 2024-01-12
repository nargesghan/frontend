"use client";
import Sidebar from "@/components/Employee/SideBar";
import { usePathname } from "next/navigation";
import ButtonAppBar from "@/components/Employee/EmployeeAuthNavbar";
import SearchBox from "@/components/Employee/SearchBox";
import DashboardTab from "@/components/Employee/DashboardTab";
import { Box,Stack } from "@mui/material";

export default function EmployeeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
   <>
      {pathname.startsWith("/employee/dashboard") ? (
        <section style={{ position: "relative" }}> <Sidebar />{children}</section>
      ) : (
        <>
          <ButtonAppBar />
          <SearchBox />
          <Stack direction={'column'} alignItems={'center'} justifyContent={'flex-end'}>
          <Box
            width={"1200px"}
            height={80}
            sx={{
              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                paddingX:'5px',
                display:'flex',
                alignItems:'flex-end'
            }}
          >
            <DashboardTab activeTab={pathname} />
          </Box>
          <Stack direction={'column'} alignItems={'center'} sx={{bgcolor:'#FAFAFA'}} width={"1200px"}>{children}</Stack>
          </Stack>
        </>
      )}

</>
    
  );
}
