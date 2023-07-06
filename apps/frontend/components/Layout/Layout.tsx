import { ReactNode } from "react"
import { Navbar, NavbarItem } from "components/Navbar/Navbar"

interface LayoutProps {
  children: ReactNode
  pages: NavbarItem[]
}

export default function Layout({ children, pages }: LayoutProps) {
  return (
    <>
      <Navbar items={pages} />
      {children}
    </>
  )
}
