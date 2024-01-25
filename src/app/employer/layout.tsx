// import ButtonAppBar from "@/components/General/EmployerNavbar"
import ButtonAppBar from "@/components/Employer/EmployerAuthNavbar"
import withAuth from "../utils/withAuthEmployer"
function EmployerLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <ButtonAppBar/>
        
   
        {children}
      </section>
    )
  }

  export default withAuth(EmployerLayout)