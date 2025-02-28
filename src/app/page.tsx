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

async function getData(): Promise<PortfolioData> {
  const filePath = join(process.cwd(), 'src', 'data', 'data.json');
  const jsonData = readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export default async function Home() {
  const data = await getData();

  return (
    <main className='flex flex-col gap-20 w-full px-4 pt-14'>
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