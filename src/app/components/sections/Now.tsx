import { Now } from "@/types/data";
import Link from "next/link";

interface NowProps {
    now: Now;
}

export default function About({ now }: NowProps) {
    return (
        <section>
            <h2>Now</h2>
            <div className="flex flex-col gap-4">
                <p>I am building&nbsp;
                    <Link href="#" className="underline text-zinc-800 dark:text-zinc-400">
                    Testimonials
                    </Link>
                    &nbsp;a feedback app that lets you collect reviews in text, video and image formats. The&nbsp;
                    <Link href="#" className="underline text-zinc-800 dark:text-zinc-400">
                    Pro Version
                    </Link>
                    &nbsp;includes feature to import your Google & Amazon reviews to share on Shopify store with our plugin.
                </p>
                <p>And I work as a freelance developer for&nbsp;
                    <Link href="https://start.akshay.ing" target="_blank" className="underline text-zinc-800 dark:text-zinc-400">
                    businesses & startups
                    </Link>
                    &nbsp;to create customised AI Agents & SaaS products.
                </p>
            </div>
            {/* <p>{now.cta}</p> */}
        </section>
    );
}