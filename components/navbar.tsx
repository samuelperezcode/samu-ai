import {UserButton} from '@clerk/nextjs'
import { MobileSidebar } from './mobile-sidebar'

export function Navbar() {
  return (
    <header className="flex items-center p-4">
      <MobileSidebar />
      <nav className="flex w-full justify-end">
        <UserButton
          afterSignOutUrl="/"
        />
      </nav>
    </header>
  )
}
