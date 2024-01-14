'use client'

import Link from "next/link"
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { monserrat } from "@/lib/fonts"
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react"
import { usePathname } from "next/navigation"

const routes = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    color: 'text-sky-500'
  },
  {
    label: 'Conversation',
    href: '/conversation',
    icon: MessageSquare,
    color: 'text-violet-500'
  },
  {
    label: 'Image Generation',
    href: '/image',
    icon: ImageIcon,
    color: 'text-pink-700'
  },
  {
    label: 'Video Genaration',
    href: '/video',
    icon: VideoIcon,
    color: 'text-orange-700'
  },
  {
    label: 'Audio Genaration',
    href: '/audio',
    icon: Music,
    color: 'text-emerald-500'
  },
  {
    label: 'Code Genaration',
    href: '/code',
    icon: Code,
    color: 'text-green-700'
  },
  {
    label: 'Settigns',
    href: '/settigns',
    icon: Settings
  },

]

export function Sidebar() {
  const pathname = usePathname()

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
        <ul className="space-y-1">
            {
              routes.map( routes => (
                <Link href={routes.href} key={routes.href} className={cn(
                  "text-sm group p-3 flex w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  routes.href === pathname ? "text-white bg-white/10" : 'text-zinc-400'
                )}>
                  <li className="flex items-center flex-1">
                      <routes.icon 
                        size={24} 
                        className={cn(
                          routes.color,
                          "w-5 h-5 mr-3"
                        )} 
                      />
                      <span>{routes.label}</span>
                  </li>
                </Link>
              
              ))
            }
        </ul>
      </div>
    </div>
  )
}
