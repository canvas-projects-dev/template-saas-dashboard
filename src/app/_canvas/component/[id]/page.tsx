import { notFound } from "next/navigation";

const components: Record<string, React.ComponentType<Record<string, unknown>>> =
  {};

export default async function ComponentPreview({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const { id } = await params;
  const props = await searchParams;
  const Component = components[id];
  if (!Component) notFound();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <Component {...props} />
    </div>
  );
}
