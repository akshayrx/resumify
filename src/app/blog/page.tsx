import RecentBlogs from "../components/sections/RecentBlogs";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI & Tech Blog | Akshay Ravikant",
  description:
    "Latest tech and AI blogs by Akshay Ravikant featuring newly launched tech apps, industry updates, and insights on MVP for startups, SaaS, and AI agents development.",
};

export default function BlogPage() {
    return (
        <main>
            {/* <h1>Recent Blog Posts</h1> */}
            <RecentBlogs limit={12} showExcerpt={true} />
        </main>
    );
}