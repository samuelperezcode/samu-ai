'use client'

import Link from "next/link"
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { monserrat } from "@/lib/fonts"

export function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="py-2 px-3 flex-1">
        <Link href={'/dashboard'} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image 
              src="/logo.svg"
              alt="Samu-AI Logo"
              fill
            />
          </div>
          <h3 className={cn(
            "text-2xl font-bold antialiased",
            monserrat.className
          )}>
            Samu AI
          </h3>
        </Link>
      </div>
    </div>
  )
}
