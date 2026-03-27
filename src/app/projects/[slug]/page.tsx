import { projects } from "@/lib/constants";
import { ProjectDetail } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text-secondary">
        Project not found.
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
