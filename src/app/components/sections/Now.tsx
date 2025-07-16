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
                    <Link href="https://suprmarket.app?utm_source=akshaying" target="_blank" className="underline text-zinc-800 dark:text-zinc-400">
                    Suprmarket
                    </Link>
                    &nbsp;a link-in-the-bio tool with ability to list products, accept payments, collect leads, and more. The&nbsp;
                    <Link href="https://www.suprmarket.app/roadmap?utm_source=akshaying" target="_blank" className="underline text-zinc-800 dark:text-zinc-400">
                    Final Product
                    </Link>
                    &nbsp;when launched will be a full-featured e-commerce marketplace, powered with AI assistants and video content.
                </p>
                <p>And I work as a freelance developer for&nbsp;
                    <Link href="https://start.akshay.ing?utm_source=akshaying" target="_blank" className="underline text-zinc-800 dark:text-zinc-400">
                    businesses & startups
                    </Link>
                    &nbsp;{now.cta}
                </p>
            </div>
        </section>
    );
}