import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, BlogPostPage } from '@/blog/utils';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

export function BlogPostDetail() {
  const [match, params] = useRoute<{ slug: string }>('/blog/:slug');
  const [post, setPost] = useState<(BlogPostPage & { content: string }) | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!match) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (params?.slug) {
      const foundPost = getPostBySlug(params.slug);
      if (foundPost) {
        setPost(foundPost);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }
  }, [match, params?.slug]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <a className="text-primary hover:underline">← Back to blog</a>
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </a>
          </Link>

          <article>
            <header className="mb-12">
              <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span className="capitalize">{post.category}</span>
                </div>
              </div>

              <p className="text-xl text-gray-700">{post.excerpt}</p>
            </header>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
