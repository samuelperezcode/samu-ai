export default function LandigLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="h-full overflow-auto bg-[#111827]">
      <div className="mx-auto w-full h-full max-w-screen-xl">
        {children}
      </div>
    </main>
  )
}
