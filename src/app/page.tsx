// src/app/page.tsx
import { readFileSync } from 'fs';
import { join } from 'path';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Skills from './components/sections/Skills';
import Project from './components/sections/Projects';
import Now from './components/sections/Now';
import Certificate from './components/sections/Certificates';
import { PortfolioData } from '../types/data';
import RecentBlogs from './components/sections/RecentBlogs';
import { Metadata } from 'next';

async function getData(): Promise<PortfolioData> {
  const filePath = join(process.cwd(), 'src', 'data', 'data.json');
  const jsonData = readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export const metadata: Metadata = {
  title: "Portfolio | Akshay Ravikant",
  description:
    "Akshay Ravikant’s portfolio hub featuring MVP for startups, SaaS development, and AI agents development projects. Check out my latest tech and AI blogs.",
};

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <About aboutMe={data.aboutMe} />
      <Now now={data.now} />
      <Project projects={data.projects} />
      <Skills skills={data.skills} />
      <Work workExperience={data.workExperience} />
      <Certificate certificates={data.certificates} />
      <RecentBlogs />
    </main>
  );
}