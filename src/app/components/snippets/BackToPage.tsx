import React from 'react';
import Link from 'next/link';
// import ClipboardCopy from '@/components/snippets/ClipboardCopy';
import ClipboardCopy from './ClipboardCopy';

interface BackToPageProps {
  href: string;
  linkText: string;
  //baseUrl?: string; // Optional prop for ClipboardCopy
}

function BackToPage({ href, linkText = 'https://akshay.ing' }: BackToPageProps) {
  return (
    <>
      <div className="flex items-center justify-between w-full pb-8">
        <div className="cursor-pointer">
          <Link href={href} prefetch={false} className="underline text-zinc-500 dark:text-zinc-500">
            {linkText}
          </Link>
        </div>
        <div className="cursor-pointer">
          <ClipboardCopy baseUrl="https://akshay.ing" />
        </div>
      </div>
    </>
  );
}

export default BackToPage;