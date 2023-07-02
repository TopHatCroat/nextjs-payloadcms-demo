import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { cva, VariantProps } from "class-variance-authority"

export interface NavbarItem {
  label: string
  href: string
}

const navbar = cva([], {
  variants: {},
})

export interface NavbarProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof navbar> {
  items: NavbarItem[]
}

export function Navbar({ items }: NavbarProps) {
  return (
    <NavigationMenu.Root className="m-auto flex max-w-4xl place-content-between">
      <div className="m-2 justify-start p-2 text-3xl font-bold">Page title</div>
      <NavigationMenu.List className="flex justify-end">
        {items.map((item) => (
          <NavigationMenu.Item
            className="m-2 block rounded bg-slate-500 px-4 py-2 font-bold text-white hover:bg-slate-400"
            key={item.href}
          >
            <NavigationMenu.Link href={item.href}>{item.label}</NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}
