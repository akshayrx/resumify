import { Now } from "@/types/data";
import Link from "next/link";

interface NowProps {
    now: Now;
}

export default function About({ now }: NowProps) {
    return (
        <section>
            <h2>Now</h2>
            <div className="flex flex-col">
                <p>I am building {` `}
                    <Link href="/blog" className='underline text-zinc-800 dark:text-zinc-400'>
                        Testimonials
                    </Link>
                    {` `}a feedback app that let's you collect reviews in text, video and image formats. The {` `}
                    <Link href="/blog" className='underline text-zinc-800 dark:text-zinc-400'>
                        Pro Version
                    </Link>
                    {` `} includes feature to import your Google & Amazon reviews and share on Shopify.
                </p>
            </div>
            {/* <h1>{aboutMe.name}</h1> */}
            <p>{now.cta}</p>
        </section>
    );
}