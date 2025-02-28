'use client'

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'

import React from 'react'

function ThemeToggle() {
    const {theme, setTheme} = useTheme();
  return (
    <Button variant='outline' size='icon' className='rounded-full' onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>
        <SunIcon className='absolute h-8 w-8 rotate-0 scale-100 dark:rotate-90 dark:scale-0'></SunIcon>
        <MoonIcon className='absolute h-8 w-8 rotate-90 scale-0 dark:rotate-0 dark:scale-100'></MoonIcon>
        </Button>
  )
}

export default ThemeToggle
