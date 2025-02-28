// components/Skills.tsx
import { SkillCategory } from '@/types/data';

interface SkillsProps {
    skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section>
            <h2>Technical Skills</h2>
            <div className="flex flex-col gap-0">
            {skills.map((skill, index) => (
                <div key={index} className='flex flex-row gap-1'>
                    <h4>{skill.category}{':'}</h4>
                    <p>{skill.items.join(', ')}</p>
                </div>
            ))}
            </div>
        </section>
    );
}