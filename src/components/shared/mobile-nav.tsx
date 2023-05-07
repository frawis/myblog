'use client'
import Link from 'next/link'
import * as React from 'react'
import { cn } from '~/lib/utils'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible'

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  menuItems: any[]
  className?: string
}

const MobileNav = React.forwardRef<HTMLDivElement, MobileNavProps>(
  ({ menuItems, className, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)

    const toggleOpen = () => {
      console.log('clicked')
      setOpen(!open)
    }

    return (
      <div ref={ref} className={cn('relative z-50', className)} {...props}>
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="relative flex flex-col data-[state=open]:w-full"
        >
          <CollapsibleTrigger asChild>
            <button
              className="inline-flex h-12 w-12 items-center justify-center border-l border-neutral-950 bg-green-600 text-black focus-within:outline-none focus:select-none focus:outline-none dark:border-white dark:bg-green-500"
              onClick={toggleOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="fixed inset-x-0 top-12 mt-px w-full space-y-4 bg-white/80 px-4 py-6 backdrop-blur-md duration-500 ease-in data-[state=open]:animate-in data-[state=close]:animate-out data-[state=close]:fade-out data-[state=open]:fade-in dark:bg-neutral-900/90 md:left-auto md:right-0 md:top-16 md:mt-[1.5px] md:w-auto md:max-w-xs md:bg-green-800/10">
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item._key}
                className="inline-flex w-full font-display text-lg font-bold dark:text-white md:justify-end"
              >
                {item.title}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    )
  }
)

export { MobileNav }
