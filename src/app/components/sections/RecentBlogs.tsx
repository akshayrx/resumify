"use client";

import { useState, useEffect } from 'react';
import { fetchRecentBlogs, BlogPost } from '@/lib/fetchBlogs';
import Link from 'next/link';

/* blog, shows limits to 3 by default, no prop passing is required eg usage
<RecentBlogs /> //shows 3 by default
<RecentBlogs limit={12} /> //show 12 posts
 */

interface RecentBlogsProps {
  limit?: number; // Optional prop, defaults to 3
  showExcerpt?: boolean; // New prop to toggle excerpt
}

export default function RecentBlogs({ limit = 5, showExcerpt = false }: RecentBlogsProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const recentBlogs = await fetchRecentBlogs(limit); // Use dynamic limit
        setBlogs(recentBlogs);
      } catch (_err) {
        setError('Unable to load blog posts due to this: ' + _err);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, [limit]); // Re-fetch if limit changes

  if (loading) return <h2>Getting latest blogs...</h2>;
  if (error) return <div>{error}</div>;

  return (
    <section>
      <h2>Recent Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className={showExcerpt ? 'mb-6' : 'mb-0'}>
          <Link
            href={`/blog/${blog.slug}`}
            rel="noopener noreferrer"
          >
            <h4
              dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
            />
            
            {showExcerpt && (
              <p
                className="line-clamp-3"
                dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
              />
            )}
            <small>
            {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </small>
          </Link>
        </div>
      ))}
    </section>
  );
}