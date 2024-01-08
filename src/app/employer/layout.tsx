import ButtonAppBar from "@/components/General/EmployerNavbar"
export default function EmployerLayout({
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