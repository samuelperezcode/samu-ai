'use client'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import TypeWriterComponent from 'typewriter-effect'

export default function LandingHero() {
  const { isSignedIn } = useAuth()
  return (
    <section className="space-y-5 p-36 text-center font-bold text-white">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypeWriterComponent
            options={{
              strings: [
                'Chatbot',
                'Video Generation',
                'Photo Generation',
                'Code Generation',
                'Music Generation'
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <p className='text-sm md:text-xl font-light text-zinc-400'>
        Create content for your business in seconds with the power of AI.
      </p>

      <Link 
        href={isSignedIn ? '/dashboard' : '/sign-up'}
        className={cn(
          buttonVariants({
            variant: 'premium',
            className: 'md:text-lg p-4 md:p-6 rounded-full font-semibold'
          })
        )}
      >
        Start Generating For Free
      </Link>
      <p>No credit card required</p>
    </section>
  )
}
