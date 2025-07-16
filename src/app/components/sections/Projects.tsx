"use client";

import React from "react";
import type { Project } from "@/types/data"; // Ensure this matches your Project type
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: ProjectProps) {
  // Sort projects by id in descending order and take the top 2
  const recentProjects = projects
    .sort((a, b) => (b.id || 0) - (a.id || 0)) // DESC order, fallback to 0 if id is missing
    .slice(0, 2); // Take only the 2 most recent

  return (
    <section>
      <h2>Featured Projects</h2>
      <div className="grid gap-12 md:gap-4 md:grid-cols-2 lg:grid-cols-2">
        {recentProjects.map((featured) => (
          <div key={featured.id || featured.title} className="flex flex-col gap-2 rounded-lg">
            <Image
              src={featured.coverImage || featured.coverImage || "/social-share-arx.png"} // Fallback image
              alt={featured.title}
              width={300}
              height={180}
              className="w-full h-auto rounded-lg max-h-[200] object-cover grayscale hover:grayscale-0"
              loading="lazy"
            />
            <Link
              href={`/projects/${featured.category.toLowerCase().replace(/ /g, '-')}/${featured.title.toLowerCase().replace(/ /g, '-')}`}
              className="transition-transform"
            >
              <div className="flex flex-col gap-0">
                <h4>{featured.title}</h4>
                <p className="line-clamp-3">{featured.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}