'use client'
import ButtonAppBar from "@/components/Employer/EmployerAuthNavbar"
import withAuth from "../utils/withAuthEmployer"
function EmployerLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section style={{display:'flex',justifyContent:'center'}}>
        <ButtonAppBar/>
        {children}
      </section>
    )
  }

  export default withAuth(EmployerLayout);