import './globals.css';
import InternshipPopup from './components/InternshipPopup';

export const metadata = {
  metadataBase: new URL('https://www.aipnt.in'),
  title: {
    default: 'AI PNT Technologies | Building the Intelligence Layer for a Digital India',
    template: '%s | AI PNT Technologies'
  },
  description:
    'AI PNT Technologies Private Limited engineers cutting-edge artificial intelligence products, digital ecosystems, and intelligent hardware for Education, Healthcare, Public Governance, and Enterprise. Makers of Prarambh, DigiSwasth, and ATAT.',
  keywords: [
    'AI PNT Technologies',
    'AIPNT',
    'PNT Services',
    'Artificial Intelligence India',
    'Prarambh Coding Platform',
    'DigiSwasth Healthcare AI',
    'ATAT AI Teacher Assistant',
    'Corporate AI Training',
    'College Summer Internships Bhubaneswar',
    'School STEM and Robotics Labs',
    'Government AI Governance Systems',
    'IoT and Robotics Hardware',
    'NEP 2020 STEM Curriculum',
    'Silicon University Incubation',
    'Bhubaneswar AI Tech Companies'
  ],
  authors: [{ name: 'AI PNT Technologies Private Limited', url: 'https://www.aipnt.in' }],
  creator: 'AI PNT Technologies Private Limited',
  publisher: 'AI PNT Technologies Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'AI PNT Technologies | Building the Intelligence Layer for a Digital India',
    description:
      'We combine Artificial Intelligence, Software, IoT and Automation to transform complex real-world problems into scalable technology products.',
    url: 'https://www.aipnt.in',
    siteName: 'AI PNT Technologies',
    images: [
      {
        url: '/assets/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'AI PNT Technologies - Building the Intelligence Layer for a Digital India'
      },
      {
        url: '/assets/logo.png',
        width: 600,
        height: 200,
        alt: 'AIPNT Logo'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI PNT Technologies | AI Products & Digital Platforms',
    description:
      'AI-powered products, digital platforms, and intelligent systems for Education, Healthcare, Government, and Enterprise.',
    images: ['/assets/hero-image.png']
  },
  icons: {
    icon: '/assets/logo-mark.png',
    apple: '/assets/logo-mark.png'
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AI PNT Technologies Private Limited',
  alternateName: 'AIPNT',
  url: 'https://www.aipnt.in',
  logo: 'https://www.aipnt.in/assets/logo.png',
  description:
    'AI PNT Technologies combines Artificial Intelligence, Software, IoT and Automation to build scalable technology products in EduTech, MedTech, GovTech, and Enterprise.',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Room no 212, DLF Cyber City (Switchtech Incubation of Silicon University) 516, Infocity Ave, Chandaka Industrial Estate, Patia',
    addressLocality: 'Bhubaneswar',
    addressRegion: 'Odisha',
    postalCode: '751024',
    addressCountry: 'IN'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-7788016666',
      contactType: 'customer service',
      email: 'info@aipnt.in',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Odia']
    }
  ],
  sameAs: [
    'https://www.linkedin.com/company/aipnt-technologies-pvt-ltd/',
    'https://x.com/aipnt.tech',
    'https://www.facebook.com/aipnt.tech/',
    'https://www.instagram.com/aipnt.tech/'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        {/* <InternshipPopup /> */}
      </body>
    </html>
  );
}
