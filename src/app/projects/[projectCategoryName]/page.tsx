import { redirect } from 'next/navigation';

export default async function CategoryRedirect({
  params,
}: {
  params: Promise<{ projectCategoryName: string }>;
}) {
  await params; // Resolve params (required for dynamic routes)
  redirect('/projects'); // Redirect to /projects
}