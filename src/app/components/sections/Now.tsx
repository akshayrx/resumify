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
                <p>I am building&nbsp;
                    <Link href="#" className="underline text-zinc-800 dark:text-zinc-400">
                    Testimonials
                    </Link>
                    &nbsp;a feedback app that lets you collect reviews in text, video and image formats. The&nbsp;
                    <Link href="#" className="underline text-zinc-800 dark:text-zinc-400">
                    Pro Version
                    </Link>
                    &nbsp;includes feature to import your Google & Amazon reviews and share on Shopify.
                </p>
            </div>
            <p>{now.cta}</p>
        </section>
    );
}