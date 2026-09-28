export const metadata = {
  title: 'DigiSwasth | AI Operating System for Modern Hospitals & Healthcare - AIPNT',
  description:
    'DigiSwasth is an end-to-end AI MedTech platform featuring smart check-in kiosks with facial recognition, doctor voice-to-prescription AI, smart access gates, and ABDM-ready hospital PMS.',
  keywords: [
    'DigiSwasth',
    'DigiSwath',
    'Smart Hospital Kiosk',
    'AI Healthcare India',
    'Doctor Voice to Prescription',
    'Biometric Patient Check-in',
    'Facial Recognition Hospital Access',
    'ABDM Compliant PMS',
    'Ayushman Bharat Digital Mission',
    'Hospital Management System',
    'Medical IoT Devices',
    'AIPNT Technologies',
    'AI PNT Healthcare',
    'Smart Health Check-in Terminal',
    'Digital OPD Queue Management'
  ],
  authors: [{ name: 'AI PNT Technologies Private Limited', url: 'https://www.aipnt.in' }],
  creator: 'AI PNT Technologies',
  publisher: 'AI PNT Technologies Private Limited',
  metadataBase: new URL('https://www.aipnt.in'),
  alternates: {
    canonical: '/products/digiswasth'
  },
  openGraph: {
    title: 'DigiSwasth | The AI Operating System for Modern Hospitals',
    description:
      'Zero Queues, Biometric Check-in, Voice-to-Prescription, and ABDM-Ready Hospital PMS. Explore our smart kiosk, handheld scanner, and speed turnstiles.',
    url: 'https://www.aipnt.in/products/digiswasth',
    siteName: 'AI PNT Technologies',
    images: [
      {
        url: '/assets/generated/digiswasth_product.jpg',
        width: 1200,
        height: 630,
        alt: 'DigiSwasth Smart Healthcare Ecosystem'
      },
      {
        url: '/assets/generated/digiswasth_kiosk.jpg',
        width: 800,
        height: 1200,
        alt: 'DigiSwasth Smart Health Check-in Terminal'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiSwasth | AI Healthcare Platform for Hospitals & Clinics',
    description:
      'Smart check-in terminals, doctor voice transcription, smart turnstiles, and unified hospital management system.',
    images: ['/assets/generated/digiswasth_product.jpg']
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

export default function DigiSwasthLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.aipnt.in/products/digiswasth/#webpage',
        url: 'https://www.aipnt.in/products/digiswasth',
        name: 'DigiSwasth - The AI Operating System for Modern Hospitals',
        description:
          'AI-powered smart hospital ecosystem providing facial recognition check-in kiosks, doctor voice-to-prescription suites, turnstile access control, and complete ABDM-compliant hospital PMS.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.aipnt.in/#website',
          name: 'AI PNT Technologies',
          url: 'https://www.aipnt.in'
        },
        about: {
          '@type': 'MedicalDevice',
          name: 'DigiSwasth Smart Healthcare Terminal',
          recognizingAuthority: 'Ayushman Bharat Digital Mission (ABDM)',
          purpose: 'Hospital Patient Queue Management, Facial Recognition Verification, and Electronic Health Record Access'
        }
      },
      {
        '@type': 'SoftwareApplication',
        name: 'DigiSwasth Doctor AI & Hospital PMS',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web, Android, Embedded Linux',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          description: 'Custom enterprise deployment for hospitals, multi-specialty clinics, and health networks.'
        },
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
