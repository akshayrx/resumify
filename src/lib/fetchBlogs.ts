// src/lib/fetchBlogs.ts
export interface BlogPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    date: string;
  }
  
  export async function fetchRecentBlogs(limit: number = 3): Promise<BlogPost[]> {
    const res = await fetch(`https://unitechinternet.in/wp-json/wp/v2/posts?per_page=${limit}`, {
      cache: 'no-store', // fetches everytime on our page load, slightly delayed due to realtime api request to WP everytime, but guarantees fresh data
    });
  
    if (!res.ok) {
      throw new Error('Failed to show blog posts, please try in sometime.');
    }
  
    const posts: BlogPost[] = await res.json();
    return posts;
  }