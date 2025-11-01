import { use } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

// Dynamically import internship components
const Oodser = dynamic(() => import('@/components/compoPages/internships/Oodser'), {
  loading: () => <Loading />,
});
const Society = dynamic(() => import('@/components/compoPages/internships/Society'), {
  loading: () => <Loading />,
});
const LuxorHoliday = dynamic(() => import('@/components/compoPages/internships/LuxorHoliday'), {
  loading: () => <Loading />,
});
const Menagalme = dynamic(() => import('@/components/compoPages/internships/Menagalme'), {
  loading: () => <Loading />,
});

const internshipComponents: Record<string, React.ComponentType> = {
  'oodser': Oodser,
  'society': Society,
  'luxor-holiday': LuxorHoliday,
  'menagalme': Menagalme,
};

export default function InternshipPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const InternshipComponent = internshipComponents[slug];

  if (!InternshipComponent) {
    notFound();
  }

  return <InternshipComponent />;
}

export function generateStaticParams() {
  return [
    { slug: 'oodser' },
    { slug: 'society' },
    { slug: 'luxor-holiday' },
    { slug: 'menagalme' },
  ];
}
