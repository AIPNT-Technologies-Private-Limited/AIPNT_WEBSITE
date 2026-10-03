export const metadata = {
  title: 'ATAT | AI Teaching Assistant for Schools & Educators - AIPNT',
  description:
    'ATAT is an intelligent AI teaching assistant enabling students to learn better with interactive PPT discussions and helping teachers create engaging lessons effortlessly. Dual Student & Teacher modes, biometric face login, and NEP 2020 aligned.',
  keywords: [
    'ATAT',
    'AI Teaching Assistant',
    'AI Teacher',
    'AIPNT ATAT',
    'Ask ATAT',
    'Smart Classroom AI',
    'PPT Based Learning AI',
    'School AI Assistant',
    'EdTech India',
    'NEP 2020 AI Classroom',
    'Student Teacher AI Mode',
    'Biometric Face Login School',
    'AIPNT Technologies'
  ],
  authors: [{ name: 'AI PNT Technologies Private Limited', url: 'https://www.aipnt.in' }],
  creator: 'AI PNT Technologies',
  publisher: 'AI PNT Technologies Private Limited',
  metadataBase: new URL('https://www.aipnt.in'),
  alternates: {
    canonical: '/products/atat'
  },
  openGraph: {
    title: 'ATAT | Your AI Teacher. Always Ready.',
    description:
      'Empowering every learner with intelligent conversations, PPT-based discussions, dual Student/Teacher modes, and secure face authentication.',
    url: 'https://www.aipnt.in/products/atat',
    siteName: 'AI PNT Technologies',
    images: [
      {
        url: '/assets/atat/atat_infographic.jpg',
        width: 1200,
        height: 675,
        alt: 'ATAT AI Teaching Assistant Infographic'
      },
      {
        url: '/assets/atat/atat_classroom_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'ATAT Smart Classroom Deployment'
      },
      {
        url: '/assets/atat/atat_logo.png',
        width: 500,
        height: 200,
        alt: 'ATAT Logo'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATAT | AI Teaching Assistant - AIPNT',
    description:
      'Intelligent conversations, interactive PPT learning, and secure face authentication for schools and educators.',
    images: ['/assets/atat/atat_classroom_hero.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function ATATLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalApplication',
        '@id': 'https://www.aipnt.in/products/atat/#app',
        name: 'ATAT - AI Teaching Assistant',
        description:
          'Intelligent conversational AI teaching assistant for school students and educators featuring dual modes, presentation-based learning, and secure biometric authentication.',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web, Interactive Whiteboards, Tablets, Windows, Linux',
        educationalLevel: 'K-12 Primary, Middle, and Secondary Schools',
        offers: [
          {
            '@type': 'Offer',
            name: 'One-Time School Purchase Model',
            price: '1200000',
            priceCurrency: 'INR',
            description: '10 Systems with hardware, trainer kits, Prarambh & ATAT software suite, and accessories.'
          },
          {
            '@type': 'Offer',
            name: 'Student Monthly Subscription',
            price: '150',
            priceCurrency: 'INR',
            description: '₹100 - ₹200 per student per month for school-wide adoption with full platform updates.'
          }
        ],
        creator: {
          '@type': 'Organization',
          name: 'AI PNT Technologies Private Limited',
          url: 'https://www.aipnt.in'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
