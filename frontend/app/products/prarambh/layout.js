export const metadata = {
  title: 'Prarambh | Web-Based Coding, AI, IoT & Robotics Platform - AIPNT',
  description:
    'Prarambh is an all-in-one web-based STEM platform for block coding, AI computer vision extensions, popular hardware (Arduino, ESP32, Pico), and bilingual Odia & English learning. Zero installation required.',
  keywords: [
    'Prarambh',
    'AIPNT',
    'AI PNT Technologies',
    'Block Coding',
    'STEM Education',
    'School Robotics Lab',
    'IoT Learning',
    'Arduino Uno',
    'ESP32 MicroPython',
    'Raspberry Pi Pico',
    'Odia Language AI',
    'Ask ATAT',
    'Educational Technology India',
    'NEP 2020 Coding Curriculum'
  ],
  authors: [{ name: 'AI PNT Technologies Private Limited', url: 'https://www.aipnt.in' }],
  creator: 'AI PNT Technologies',
  publisher: 'AI PNT Technologies Private Limited',
  metadataBase: new URL('https://www.aipnt.in'),
  alternates: {
    canonical: '/products/prarambh'
  },
  openGraph: {
    title: 'Prarambh | Where Ideas Code, Projects Come Alive!',
    description:
      'All-in-one web platform for coding, AI, IoT & Robotics designed for school learners, educators and innovators. Built-in WebUSB serial monitor and Ask ATAT AI tutor.',
    url: 'https://www.aipnt.in/products/prarambh',
    siteName: 'AI PNT Technologies',
    images: [
      {
        url: '/assets/generated/Prarambh.png',
        width: 1200,
        height: 630,
        alt: 'Prarambh Web IDE Interface'
      },
      {
        url: '/assets/Prarambh_logo.png',
        width: 600,
        height: 200,
        alt: 'Prarambh Logo'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prarambh | AI, IoT & Robotics Coding Platform',
    description:
      'Zero-installation browser IDE for block-based coding, edge AI vision, Arduino, ESP32 and Odia language voice support.',
    images: ['/assets/generated/Prarambh.png']
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['SoftwareApplication', 'Product'],
  name: 'Prarambh',
  alternateName: 'Prarambh Code IoT AI',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All modern web browsers (Chrome, Edge, Firefox, Safari)',
  url: 'https://prarambh.ai.pntservices.co.in',
  description:
    'All-in-one web-based coding, AI, IoT & robotics platform for learners and educators with Scratch 3.0 compatibility, WebUSB serial flashing, and bilingual Odia voice interaction.',
  image: 'https://www.aipnt.in/assets/generated/Prarambh.png',
  offers: [
    {
      '@type': 'Offer',
      name: 'One-Time Purchase Model',
      price: '1200000',
      priceCurrency: 'INR',
      description: '10 Systems with hardware, trainer kits, Prarambh & ATAT software, and testimonial booklet.'
    },
    {
      '@type': 'Offer',
      name: 'Student Subscription Model',
      price: '100-200',
      priceCurrency: 'INR',
      description: 'Per student per month for school-wide classroom adoption.'
    }
  ],
  creator: {
    '@type': 'Organization',
    name: 'AI PNT Technologies Private Limited',
    url: 'https://www.aipnt.in',
    logo: 'https://www.aipnt.in/assets/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room no 212, DLF Cyber City (Switchtech Incubation of Silicon University) 516, Infocity Ave',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      postalCode: '751024',
      addressCountry: 'IN'
    }
  }
};

export default function PrarambhLayout({ children }) {
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
