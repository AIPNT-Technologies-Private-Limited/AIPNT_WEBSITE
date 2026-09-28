export const metadata = {
  title: 'Our Products | Intelligent Systems & Platforms - AIPNT',
  description:
    'Discover AI PNT Technologies products: Prarambh (STEM & Coding Platform), DigiSwasth (AI Healthcare), ATAT (RAG AI Teaching), and Grievance Redressal System.',
  keywords: [
    'AIPNT Products',
    'Prarambh',
    'DigiSwasth',
    'ATAT AI Teacher',
    'Constituency Grievance System',
    'AI Healthcare India',
    'EduTech Odisha',
    'AI PNT Technologies'
  ],
  metadataBase: new URL('https://www.aipnt.in'),
  alternates: {
    canonical: '/products'
  },
  openGraph: {
    title: 'Intelligent Products & Systems | AI PNT Technologies',
    description:
      'Real-world AI products solving meaningful problems across Education, Healthcare, Public Governance and Enterprise.',
    url: 'https://www.aipnt.in/products',
    siteName: 'AI PNT Technologies',
    images: [
      {
        url: '/assets/generated/prarambh_product.jpg',
        width: 1200,
        height: 630,
        alt: 'AIPNT Products Ecosystem'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  }
};

export default function ProductsLayout({ children }) {
  return children;
}
