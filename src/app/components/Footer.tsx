'use client'
import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
    <footer className="mt-24 px-4 py-4 border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <Link href="https://start.akshay.ing" target="_blank">
            <small>© 2025 Akshay Ravikant.</small>
        </Link>
        <div className="text-xs text-zinc-400">
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer