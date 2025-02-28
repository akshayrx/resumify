"use client";
import React from "react";
import type { Project } from "@/types/data";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

interface ProjectProps {
    projects: Project[]
}

export default function Project({ projects }: ProjectProps) {
    const [showAll, setShowAll] = useState(false);

    // Always show 2 projects initially, or all if showAll is true
    const initialProjects = projects.slice(0, 2);
    const allProjects = showAll ? projects : initialProjects;

    return (
        <section>
            <h2>Featured Projects</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {allProjects.map((featured, index) => (
                    <div key={index} className='flex flex-col gap-2 rounded-lg'>
                        <Image
                            src={featured.coverImage}
                            alt={featured.title}
                            width={300}
                            height={180}
                            className="w-full h-auto rounded-lg max-h-[200] object-cover grayscale hover:grayscale-0"
                            loading="lazy"
                        />
                        <Link
                            // href={`projects/${featured.category.toLowerCase()}/${featured.title.toLowerCase().replace(/ /g, '-')}`}
                            href={featured.liveUrl}
                            target="_blank"
                            className="block transition-transform"
                        >
                            <div className="flex flex-col gap-0">
                                <h4>{featured.title}</h4>
                                {/* <small>{featured.techStack.join(', ')}</small> */}
                                <small>{featured.description}</small>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
            {projects.length > 2 && !showAll && (
                <button
                    // href={"/"}
                    onClick={() => setShowAll(true)}
                    className="mt-4"
                >
                    View all projects
                </button>
            )}
        </section>
    )
}