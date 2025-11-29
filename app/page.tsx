import type { Metadata } from 'next';
import { fetchSEOData } from '@/utils/fetchSEOData';
import HomePageClient from './components/HomePageClient';

/**
 * Generate metadata for home page using Next.js Metadata API
 * This runs on the server and provides better SEO than client-side meta tags
 */
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await fetchSEOData('/home');
  
  const title = seoData.meta_title || 'Home - Professional Services';
  const description = seoData.meta_description || 'Professional services for your needs';
  const keywords = seoData.meta_keywords || '';

  return {
    title,
    description,
    keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const Index = () => {
  return <HomePageClient />;
};

export default Index;
