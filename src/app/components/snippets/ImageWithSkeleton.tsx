'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className = ''
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  // Handle SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: `${width}/${height}` }}>
      {(isLoading || !mounted) && (
        <Skeleton 
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
}
