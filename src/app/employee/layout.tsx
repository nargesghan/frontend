'use client'
import Sidebar from "@/components/Employee/SideBar"
import { usePathname } from 'next/navigation'
import ButtonAppBar from "@/components/Employee/EmployeeAuthNavbar"
import SearchBox from "@/components/Employee/SearchBox"

export default function EmployeeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const pathname=usePathname()

    return (
      <section style={{ position: 'relative' }}>
             {pathname.startsWith('/employee/dashboard') ? <Sidebar /> : <><ButtonAppBar/><SearchBox/></>}
   
        {children}
      </section>
    )
  }