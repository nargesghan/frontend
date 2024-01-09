import Sidebar from "@/components/Employee/SideBar"
export default function EmployeeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section style={{ position: 'relative' }}>
        <Sidebar />
   
        {children}
      </section>
    )
  }