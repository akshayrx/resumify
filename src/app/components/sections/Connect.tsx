import { AboutMe } from "@/types/data";
import Link from "next/link";
// import { Badge } from "@/components/ui/badge";

interface AboutProps {
    aboutMe: AboutMe;
}

export default function Connect({ aboutMe }: AboutProps) {
    return (
        <section className="px-4 mt-12">
            <h2>Connect</h2>
            <p>Follow me on&nbsp;
                <Link href={aboutMe.twitter} target="_blank" className="underline text-zinc-800 dark:text-zinc-400">
                    X
                </Link>, view my code and open-source projects on&nbsp;
                <Link href={aboutMe.github} target="_blank" className="underline text-zinc-800 dark:text-zinc-400">
                    Github
                </Link>, explore my <Link href={aboutMe.linkedin} target="_blank" className="underline text-zinc-800 dark:text-zinc-400">
                    LinkedIn
                </Link>
                &nbsp;profile, or email me at <Link href={`mailto:${aboutMe.email}`} className="underline text-zinc-800 dark:text-zinc-400">{aboutMe.email}</Link>.
            </p>
            {/* <p>Follow me on <Link href={aboutMe.twitter}><Badge>X</Badge></Link>, view my code and open-source projects on <Link href={aboutMe.github}><Badge>Github</Badge></Link>, explore my <Link href={aboutMe.linkedin}><Badge>LinkedIn</Badge></Link> profile, or email me directly at <Link href={`mailto:${aboutMe.email}`}>{aboutMe.email}</Link>.</p> */}
        </section>
    );
}