import { Navbar } from "@/components/navbar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-full relative">
      <aside className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <h3>side-bar</h3>
      </aside>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
