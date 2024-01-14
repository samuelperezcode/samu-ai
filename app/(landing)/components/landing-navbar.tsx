'use client'

import { buttonVariants } from "@/components/ui/button";
import { monserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function LandingNavbar () {
  const { isSignedIn }= useAuth()

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      <Link href={'/'} className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image 
            src={'/logo.svg'}
            alt="Samu-AI logo"
            fill
          />
        </div>
        <h3 className={cn(
          'text-2xl font-bold text-white antialiased',
          monserrat.className
        )}>
          Samu AI
        </h3>    
      </Link>

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'} className={cn(buttonVariants({variant: 'outline', className:'rounded-full'}))}>
          Get Started
        </Link>
      </div>
    </nav>
  )
}
