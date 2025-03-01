import type { Certificate } from '@/types/data';

interface CertificateProps {
    certificates: Certificate[];
}

export default function Certificate({ certificates }: CertificateProps) {
    return (
        <section>
            <h2>Certificates</h2>
            {certificates.map((learning, index) => (
                <div key={index} className='flex flex-col gap-0'>
                    <h4>{learning.title}</h4>
                    <p>{learning.issuer}</p>
                </div>
            ))}
        </section>
    );
}