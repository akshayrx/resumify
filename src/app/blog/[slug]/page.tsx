// import Image from 'next/image';
import { fetchPostBySlug } from '../../../lib/fetchBlogs';
import Link from 'next/link';
import BackToPage from '@/app/components/snippets/BackToPage';
import { Metadata } from 'next';
// import { Skeleton } from "@/components/ui/skeleton";
import ImageWithSkeleton from '@/app/components/snippets/ImageWithSkeleton';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  return {
    title: `${post.title.rendered} | Akshay Ravikant`,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 160), // Strip HTML, limit to 160 chars
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await the params object
  const post = await fetchPostBySlug(slug);

  return (
    <main className="gap-8 prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
      <section>
        <BackToPage href="/blog" linkText="Back to Blog" />
        <div className="mb-6 overflow-hidden rounded-lg gap-8 flex flex-col">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <ImageWithSkeleton
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                width={1200}
                height={630}
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
          <h1
            className="text-3xl font-semibold tracking-tighter text-black dark:text-white"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <small>
            Published on: {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </small>
          <p className="line-clamp-3 overflow-hidden">
          {post.excerpt.rendered.replace(/<[^>]+>/g, '').replace(/\n/g, '')}
        </p>
        </div>
      </section>

      <article className='flex flex-col'>
        
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
      <Link
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 dark:text-blue-300 mt-4"
      >
        View Original Article
      </Link>

    </main>
  );
}