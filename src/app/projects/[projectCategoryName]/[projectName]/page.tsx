import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioData } from '../../../../lib/getPortfolioData';
import BackToPage from '@/app/components/snippets/BackToPage';

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   techStack: string;
//   liveUrl: string;
//   image: string;
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectCategoryName: string; projectName: string }>;
}): Promise<Metadata> {
  const { projectCategoryName, projectName } = await params;
  const data = await getPortfolioData();
  const project = data.projects.find(
    (p) =>
      p.category.toLowerCase().replace(/ /g, '-') === projectCategoryName &&
      p.title.toLowerCase().replace(/ /g, '-') === projectName
  );
  return {
    title: `${project?.title || 'Project'} | Akshay Ravikant`,
    description: project?.description || "A project by Akshay Ravikant.",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectCategoryName: string; projectName: string }>;
}) {
  const { projectCategoryName, projectName } = await params;
  const data = await getPortfolioData();
  const projects = data.projects.map((p) => ({
    id: p.id || Math.random(),
    projectName: p.title,
    category: p.category,
    description: p.description,
    techStack: p.techStack.join(', '),
    liveUrl: p.liveUrl,
    image: p.coverImage || '/og-image.png',
  }));

  const project = projects.find(
    (p) =>
      p.category.toLowerCase().replace(/ /g, '-') === projectCategoryName &&
      p.projectName.toLowerCase().replace(/ /g, '-') === projectName
  );

  if (!project) {
    return (
      <>
        <BackToPage href="/projects" linkText="Back to Projects" />
        <div className="container mx-auto">Project not found.</div>
      </>
    );
  }

  return (
    <main>
      <section>
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.projectName}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <h1 className="mb-4">{project.projectName}</h1>
        <p>Category: {project.category}</p>
        <p>Tech Stack: {project.techStack}</p>
        <h4>Brief</h4>
        <p className="mb-4">{project.description}</p>
        <h4>Use Case</h4>
        <p className="mb-4">{project.description}</p>
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Visit Live Site
        </Link>
      </section>
      <BackToPage href="/projects" linkText="Back to Projects" />
    </main>
  );
}