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
                <div key={index} className='flex flex-col gap-1'>
                    <div className="flex flex-col gap-1 md:justify-between md:items-center md:flex-row lg:flex-row">
                        <h4>{job.title} at {job.company}</h4>
                        <small>{job.location}, {job.startDate} - {job.endDate}</small>
                    </div>
                    <p className='mb-4'>{job.responsibilities.join(" ")}</p>
                </div>
            ))}
        </section>
    );
}