'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import * as Switch from '@radix-ui/react-switch'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme()

  return (
    <div className="tems-center flex">
      <SunIcon className="mr-2 h-6 w-6 text-neutral-950 transition-colors duration-100 ease-in-out dark:text-white" />
      <Switch.Root
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="relative h-[26px] w-[42px] cursor-pointer rounded-full border border-gray-950 bg-transparent outline-none  data-[state=checked]:bg-black dark:border-white"
      >
        <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full border border-gray-950 bg-transparent transition-transform will-change-transform duration-100 data-[state=checked]:translate-x-[18px] dark:border-white" />
      </Switch.Root>
      <MoonIcon className="ml-2 h-6 w-6 text-neutral-950 transition-colors duration-100 ease-in-out dark:text-white" />
    </div>
  )
}

export { ThemeSwitcher }
