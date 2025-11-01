import { use } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

// Dynamically import project components
const Pro1 = dynamic(() => import('@/components/compoPages/Projects/Pro1'), {
  loading: () => <Loading />,
});
const Pro2 = dynamic(() => import('@/components/compoPages/Projects/Pro2'), {
  loading: () => <Loading />,
});
const Pro3 = dynamic(() => import('@/components/compoPages/Projects/Pro3'), {
  loading: () => <Loading />,
});
const Pro4 = dynamic(() => import('@/components/compoPages/Projects/Pro4'), {
  loading: () => <Loading />,
});
const Pro5 = dynamic(() => import('@/components/compoPages/Projects/Pro5'), {
  loading: () => <Loading />,
});

const projectComponents: Record<string, React.ComponentType> = {
  '1': Pro1,
  '2': Pro2,
  '3': Pro3,
  '4': Pro4,
  '5': Pro5,
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const ProjectComponent = projectComponents[id];

  if (!ProjectComponent) {
    notFound();
  }

  return <ProjectComponent />;
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}
