'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="mb-8 flex items-center justify-between px-4">
      <Link href="/" className="flex items-center flex-start gap-4">
      <div>
        {/* profile picture here */}
        <Image
          src="/profile_akshayravikant.png"
          alt="Akshay Ravikant"
          priority={true}
          width={72}
          height={72}
          className="rounded-full hover:scale-105 transition-transform"
          //loading="lazy" //either this or priority is allowed to use
        />
      </div>
      <div>
        <h1>
          Akshay Ravikant
        </h1>
        <p>Full-Stack Developer</p>
      </div>
      </Link>

        <nav className="items-end md:items-center flex flex-col md:flex-row gap-4 justify-between text-sm text-zinc-600 dark:text-zinc-500">
          <Link href="/projects" prefetch>Projects</Link>
          <Link href="/blog" prefetch>Blog</Link>
        </nav>
      
    </header>
  )
}

export default Header