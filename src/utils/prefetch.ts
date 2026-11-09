/**
 * Prefetch Utility for high-performance instant navigation
 */
let blogPageLoaded = false;
let blogPostLoaded = false;

export const prefetchBlogPage = () => {
  if (!blogPageLoaded && typeof window !== 'undefined') {
    blogPageLoaded = true;
    import('../pages/Blog');
  }
};

export const prefetchBlogPost = () => {
  if (!blogPostLoaded && typeof window !== 'undefined') {
    blogPostLoaded = true;
    import('../pages/BlogPost');
  }
};
