// import ButtonAppBar from "@/components/General/EmployerNavbar"
import ButtonAppBar from "@/components/Employer/EmployerAuthNavbar"
export default function EmployerLayout({
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