import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ArrowLeft, Calendar, Tag, User, Share2, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { seoBlogPosts } from '../data/seoBlogPosts';
import { getTopicImageUrl } from '../utils/topicImages';

const blogContent: Record<string, any> = {
  'how-to-donate-securely': {
    sections: [
      {
        title: 'Why Online Donation Security Matters',
        content: 'In the digital age, to donate money to charity online India has become easier than ever. However, ensuring your contribution reaches the right hands safely is paramount. Safe online donation for poor people requires a few simple but critical steps to verify the legitimacy of the Society. Many donors often ask how to donate money to Society online without any risks.'
      },
      {
        title: 'How to Verify a Trusted Society in India',
        content: 'Before you decide to donate money to charity online India, always check for the Society\'s registration number. For instance, Dargah Saiyad Ali Shah Seva Sansthan is registered under COOP/2025/BHILWARA/500577. A trusted Society to donate online in India will always be transparent about its registration, financial audits, and on-ground impact.'
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
  
  const seoPost = seoBlogPosts.find((p) => p.id === id);
  const post = t.blog.posts.find((p: any) => p.id === id) || (seoPost ? {
    id: seoPost.id,
    title: seoPost.title,
    excerpt: seoPost.excerpt,
    date: seoPost.date,
    isoDate: seoPost.isoDate,
    category: seoPost.category,
  } : null);

  const content = id ? (blogContent[id] || (seoPost ? { sections: seoPost.sections } : null)) : null;

  const article = post ? {
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": getTopicImageUrl(post.id),
    "datePublished": `${post.isoDate}T08:00:00+05:30`,
    "dateModified": `${post.isoDate}T08:00:00+05:30`,
    "author": {
      "@type": "Person",
      "name": "Shah Seva Admin",
      "url": "https://shahseva.vercel.app/about"
    },
    "publisher": {
      "@type": "NGO",
      "name": "Shah Seva (Dargah Saiyad Ali Shah Seva Sansthan)",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://shahseva.vercel.app/blog/${id}`
    }
  } : null;

  const howToSchema = id === 'how-to-donate-hair-india' ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Donate Hair in India",
    "description": "A comprehensive step-by-step guide on how to safely cut, package, and donate your healthy hair to make custom medical wigs for cancer patients in India.",
    "image": getTopicImageUrl('how-to-donate-hair-india'),
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Elastic hair ties or rubber bands"
      },
      {
        "@type": "HowToSupply",
        "name": "Ziplock plastic storage bag"
      },
      {
        "@type": "HowToSupply",
        "name": "Padded bubble shipping envelope"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Sharp hair shears or hair-cutting scissors"
      },
      {
        "@type": "HowToTool",
        "name": "Ruler or measuring tape"
      },
      {
        "@type": "HowToTool",
        "name": "Hair comb or brush"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Measure Minimum Length Required",
        "text": "Using a ruler or tape measure, check that your ponytail will measure at least 10 inches (25 cm) long in the area you intend to cut.",
        "url": "https://shahseva.vercel.app/blog/how-to-donate-hair-india#step-1",
        "image": "https://picsum.photos/seed/measure-hair/400/300"
      },
      {
        "@type": "HowToStep",
        "name": "Wash and Dry Meticulously",
        "text": "Cleanse your hair thoroughly with a mild shampoo. Do not apply conditioners, sprays, or styling products. Blow dry completely so no humidity or moisture remains in the strands.",
        "url": "https://shahseva.vercel.app/blog/how-to-donate-hair-india#step-2",
        "image": "https://picsum.photos/seed/wash-dry/400/300"
      },
      {
        "@type": "HowToStep",
        "name": "Tie in Multiple Rubber Bands",
        "text": "Gather your dry hair into 1 or more tightly bound ponytails. Apply elastic bands at the top near your neck, in the middle, and close to the tips to prevent loose strands from shifting.",
        "url": "https://shahseva.vercel.app/blog/how-to-donate-hair-india#step-3",
        "image": "https://picsum.photos/seed/tie-bands/400/300"
      },
      {
        "@type": "HowToStep",
        "name": "Cut cleanly above the top band",
        "text": "Using professional hair-cutting scissors, cut carefully 0.5 inches above your highest rubber band. Hold the pony or braid securely to avoid scattering loose hair.",
        "url": "https://shahseva.vercel.app/blog/how-to-donate-hair-india#step-4",
        "image": "https://picsum.photos/seed/cut-hair/400/300"
      },
      {
        "@type": "HowToStep",
        "name": "Seal in Ziplock & Mail to NGO",
        "text": "Wrap the dry ponytail bundle in clean paper towels or tissue, place it in an airtight zip seal plastic bag, place inside a padded shipping envelope, and send it to your chosen NGO address.",
        "url": "https://shahseva.vercel.app/blog/how-to-donate-hair-india#step-5",
        "image": "https://picsum.photos/seed/seal-mail/400/300"
      }
    ]
  } : null;

  const graph: any[] = [];
  if (article) {
    graph.push({
      "@context": "https://schema.org",
      ...article
    });
  }
  if (seoPost && seoPost.faqs && seoPost.faqs.length > 0) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": seoPost.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }
  if (howToSchema) {
    graph.push(howToSchema);
  }

  const articleSchema = graph.length > 0 ? {
    "@context": "https://schema.org",
    "@graph": graph
  } : null;

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
    <div className="bg-white min-h-screen pt-20 pb-20">
      <SEO 
        title={`${post.title} | Dargah Saiyad Ali Shah Seva Sansthan Blog`}
        description={post.excerpt}
        keywords={`${post.title}, ${post.category}, charity stories india, trusted NGO blog, how to help poor families`}
        schema={articleSchema}
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
              src={getTopicImageUrl(post.id)} 
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

            {seoPost && seoPost.faqs && seoPost.faqs.length > 0 && (
              <div className="mt-20 pt-16 border-t border-slate-100">
                <h2 className="text-4xl font-serif font-bold text-primary mb-10">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  {seoPost.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100 not-italic">
                      <h3 className="text-xl font-bold text-primary mb-4 flex gap-3">
                        <span className="text-accent font-serif font-bold">Q:</span> {faq.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed pl-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
