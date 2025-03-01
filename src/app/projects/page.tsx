import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPortfolioData } from '../../lib/getPortfolioData'; // Use centralized data fetch

interface Project {
  id: number;
  projectName: string;
  category: string;
  description: string;
  techStack: string;
  liveUrl: string;
  image: string;
}

export const metadata: Metadata = {
  title: "Projects | Akshay Ravikant",
  description:
    "Explore Akshay Ravikant’s projects in MVP for startups, SaaS development, and AI agents development. A portfolio hub showcasing innovative solutions.",
};

export default async function ProjectsPage() {
  const data = await getPortfolioData();
  const projects = data.projects.map((p) => ({
    id: p.id || Math.random(), // Add ID if missing
    projectName: p.title, // Map title to projectName
    category: p.category,
    description: p.description,
    techStack: p.techStack.join(', '),
    liveUrl: p.liveUrl,
    image: p.coverImage || '/social-share-arx.png', // Default image if missing
  }));

  const groupedProjects = projects.reduce((acc: { [key: string]: Project[] }, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {});
  
  // // Sort within each group by projectName (title)
  // Object.keys(groupedProjects).forEach((category) => {
  //   groupedProjects[category].sort((a, b) => a.projectName.localeCompare(b.projectName));
  // });

  // // Sort categories, "AI Agents" first
  // const sortedCategories = Object.keys(groupedProjects).sort((a, b) => {
  //   if (a === "AI Agents") return -1;
  //   if (b === "AI Agents") return 1;
  //   return a.localeCompare(b);
  // });

  if (!groupedProjects) {
    return <div className="container mx-auto p-4">Project not found.</div>;
  }

  return (
    <main>
      {Object.entries(groupedProjects).map(([category, projectsList]) => (
        <div key={category} className="rounded-2xl bg-zinc-300/60 p-[1px] dark:bg-zinc-600/30">
          <div className="relative flex flex-col gap-2 h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 space-y-2">
            <h2 className="mb-2 dark:text-zinc-100">{category}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projectsList.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.category.toLowerCase().replace(/ /g, '-')}/${project.projectName.toLowerCase().replace(/ /g, '-')}`}
                  className="block hover:scale-95 transition-transform"
                >
                  <div className="flex flex-col gap-1">
                    {project.image && (
                      <div className="mb-2 overflow-hidden rounded-lg h-auto object-cover grayscale hover:grayscale-0">
                        <Image
                          src={project.image}
                          alt={project.projectName}
                          width={300}
                          height={180}
                          className="w-full h-auto max-h-[200] object-cover grayscale hover:grayscale-0"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h4>{project.projectName}</h4>
                    <small className="line-clamp-2">{project.description}</small>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
      {Object.keys(groupedProjects).length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No projects found.</p>
      )}
    </main>
  );
}