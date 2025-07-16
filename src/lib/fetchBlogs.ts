// src/lib/fetchBlogs.ts
export interface BlogPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string }; // Add content for full post
    link: string;
    date: string;
    slug: string; // Add slug for matching
    featured_media: number; // ID of the featured image
    _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string; // URL of the featured image
      alt_text?: string;
      media_details?: {
        width: number;
        height: number;
      };
    }[];
  };
  }
  
  export async function fetchRecentBlogs(limit: number = 5): Promise<BlogPost[]> {
    const res = await fetch(`https://blog.akshay.ing/wp-json/wp/v2/posts?per_page=${limit}`, {
      cache: 'no-store', // fetches everytime on our page load, slightly delayed due to realtime api request to WP everytime, but guarantees fresh data
    });
  
    if (!res.ok) {
      throw new Error('Failed to show blog posts, please try in sometime.');
    }
  
    const posts: BlogPost[] = await res.json();
    return posts;
  }

  export async function fetchPostBySlug(slug: string): Promise<BlogPost> {
    const res = await fetch(`https://blog.akshay.ing/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }
    const posts: BlogPost[] = await res.json();
    if (posts.length === 0) {
      throw new Error('Post not found');
    }
    //return posts[0]; // Slug is unique, so return the first match
    const post = posts[0];
    // Ensure paragraphs (optional, only if needed)
    post.content.rendered = post.content.rendered.replace(/(?<!<br>)\n+/g, '<br>');
    return post;
  }