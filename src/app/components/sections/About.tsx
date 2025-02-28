// components/About.tsx
// import { AboutMe } from '../../../types/data';
import { AboutMe } from "@/types/data";

interface AboutProps {
    aboutMe: AboutMe;
}

export default function About({ aboutMe }: AboutProps) {
    return (
        <section>
            <h2>About</h2>
            {aboutMe.bio.map((self, index) => (
                <p key={index}>{self}</p>
            ))}
        </section>
    );
}