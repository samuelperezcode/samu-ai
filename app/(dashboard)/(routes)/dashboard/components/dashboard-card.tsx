'use client'

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface DashboardCardProps {
  label: string;
  href: string;
  children: ReactNode;
  bgColor: string;
}

export function DashboardCard({label, href, children, bgColor}: DashboardCardProps) {
  const router = useRouter()

  const handleCLick = () => {
    router.push(href)
  }

  return (
    <Card
      onClick={handleCLick}
      key={href}
      className="flex items-center justify-between p-4 border border-black/5 hover:shadow-md transition cursor-pointer"
    >
      <div className="flex items-center gap-x-4">
        <div className={cn(
          'p-2 w-fit rounded-md',
          bgColor
        )}>
          {children}
        </div>
        <p className="font-semibold">
          {label}
        </p>
      </div>
      <ArrowRight className="w-5 h-5" />
    </Card>
  )
}
