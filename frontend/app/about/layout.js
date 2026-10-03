export const metadata = {
  title: 'About Us | Building the Intelligence Layer for Digital India',
  description:
    'Learn about AI PNT Technologies, our vision, leadership team, and mission to pioneer accessible AI, IoT, and digital transformation across India.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Us | AI PNT Technologies',
    description:
      'We combine AI, Software, IoT and Automation to solve real-world problems at scale.',
    url: 'https://www.aipnt.in/about',
    images: ['/assets/hero-image.png']
  }
};

export default function AboutLayout({ children }) {
  return children;
}
