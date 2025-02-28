// components/Work.tsx
import { WorkExperience } from '@/types/data';

interface WorkProps {
    workExperience: WorkExperience[];
}

export default function Work({ workExperience }: WorkProps) {
    return (
        <section>
            <h2>Work Experience</h2>
            {workExperience.map((job, index) => (
                <div key={index} className='flex flex-col gap-0'>
                    <h4>{job.title} at {job.company}</h4>
                    <small>{job.startDate} - {job.endDate}</small>
                    <p>{job.responsibilities}</p>
                </div>
            ))}
        </section>
    );
}