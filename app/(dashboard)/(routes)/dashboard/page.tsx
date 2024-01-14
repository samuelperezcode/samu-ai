import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react"
import { DashboardCard } from "./components/dashboard-card"
import { cn } from "@/lib/utils"

const tools = [
  {
    label: 'Conversation',
    href: '/conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10'
  },
  {
    label: 'Image Generation',
    href: '/image',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10'
  },
  {
    label: 'Video Genaration',
    href: '/video',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10'
  },
  {
    label: 'Audio Genaration',
    href: '/audio',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  {
    label: 'Code Genaration',
    href: '/code',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10'
  },
]

export default function DashbaordPage() {
  return (
    <section className="mb-4">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of AI</h2>
        <p className="text-muted-foreground text-sm md:text-lg font-light text-center">Chat with a well trained AI - Increse your productivity to the next level.</p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32 pb-4">
        {
          tools.map( tool => (
            <DashboardCard 
              key={tool.href}
              label={tool.label}
              href={tool.href}
              bgColor={tool.bgColor}
            >
              <tool.icon 
                className={cn(
                  'w-8 h-8',
                  tool.color
                )}
              />
            </DashboardCard>
          ))
        }
      </div>
    </section>
  )
}
