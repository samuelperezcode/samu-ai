import { Button } from "@/components/ui/button";
import {Menu} from 'lucide-react'
import {UserButton} from '@clerk/nextjs'

export function Navbar() {
  return (
    <header className="flex items-center p-4">
      <Button variant={'ghost'} size={'icon'} className="md:hidden">
        <Menu />
      </Button>
      <nav className="flex w-full justify-end">
        <UserButton
          afterSignOutUrl="/"
        />
      </nav>
    </header>
  )
}
