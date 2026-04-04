import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ArrowLeft, Calendar, Tag, User, Share2, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const blogContent: Record<string, any> = {
  'how-to-donate-securely': {
    sections: [
      {
        title: 'Why Online Donation Security Matters',
        content: 'In the digital age, to donate money to charity online India has become easier than ever. However, ensuring your contribution reaches the right hands safely is paramount. Safe online donation for poor people requires a few simple but critical steps to verify the legitimacy of the Society. Many donors often ask how to donate money to Society online without any risks.'
      },
      {
        title: 'How to Verify a Trusted Society in India',
        content: 'Before you decide to donate money to charity online India, always check for the Society\'s registration number. For instance, Shah Seva Sansthan Society is registered under COOP/2025/BHILWARA/500577. A trusted Society to donate online in India will always be transparent about its registration, financial audits, and on-ground impact.'
      },
      {
        title: 'Steps for a Secure Online Charity Donation',
        content: 'If you are looking for how to donate money to Society online securely, follow these steps:\n1. Use official website links only.\n2. Check for HTTPS in the URL.\n3. Verify the UPI ID or bank details match the Society name.\n4. Look for transparency reports and donor testimonials. By following these guidelines, you can ensure your support reaches those who need it most through a trusted Society to donate online in India.'
      }
    ]
  },
  'impact-of-education-donation': {
    sections: [
      {
        title: 'Breaking the Cycle of Poverty',
        content: 'When you choose to donate money to charity online India for poor children education, you create a lasting impact. Education is not just about learning to read and write; it\'s about providing a path out of generational poverty. Many people search for how to donate money to Society online to support such causes, and your contribution can be the turning point for a child\'s life.'
      },
      {
        title: 'What Your Education Donation Provides',
        content: 'Your support helps us provide essential school supplies, including books, uniforms, and stationery. As a trusted Society to donate online in India, we ensure that your education donation covers school fees for children who would otherwise be forced into child labor. Sponsor a poor child education online today and witness the transformation firsthand.'
      }
    ]
  },
  'supporting-cancer-patients': {
    sections: [
      {
        title: 'The Battle Against Cancer in Underprivileged Communities',
        content: 'To donate money to charity online India for cancer patient treatment is to give the gift of life. Medical help donation for poor patients is a critical need, as the cost of chemotherapy and surgery can bankrupt a family living in poverty. If you are wondering how to donate money to Society online for medical aid, our platform provides a secure and direct way to help.'
      },
      {
        title: 'How We Use Your Medical Donation',
        content: 'We work directly with hospitals to pay for the bills of poor patients. As a trusted Society to donate online in India, we provide complete transparency on how your medical donation is used. Your contribution ensures that no one is denied treatment due to lack of funds. Donate for hospital bills for poor and give someone a second chance at life.'
      }
    ]
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const post = t.blog.posts.find((p: any) => p.id === id);
  const content = id ? blogContent[id] : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      <SEO 
        title={`${post.title} | Shah Seva Sansthan Blog`}
        description={post.excerpt}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all"
          >
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <div className="flex items-center gap-6 text-slate-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              {post.category}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              By Admin
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="rounded-[3rem] overflow-hidden shadow-strong mb-16 aspect-video">
            <img 
              src={`https://picsum.photos/seed/${post.id}/1200/800`} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed italic border-l-4 border-accent pl-8">
              {post.excerpt}
            </p>

            {content.sections.map((section: any, idx: number) => (
              <div key={idx} className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">{section.title}</h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all group">
                <Share2 size={18} /> Share Post
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-primary font-bold rounded-xl hover:bg-accent hover:text-white transition-all group">
                <Heart size={18} /> Like
              </button>
            </div>
            
            <Link 
              to="/donate" 
              className="btn-primary"
            >
              Support Our Mission <ArrowLeft className="rotate-180" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
