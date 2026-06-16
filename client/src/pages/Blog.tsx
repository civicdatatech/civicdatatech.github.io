import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { getAllPosts, BlogPostPage } from '@/blog/utils';
import { Calendar, User, Tag } from 'lucide-react';

export function Blog() {
  const [posts, setPosts] = useState<BlogPostPage[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const allPosts = getAllPosts();
    setPosts(allPosts);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-600">
              Stories, updates, and insights from the civic data community.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <Link href={`/blog/${post.slug}`}>
                  <a className="group">
                    <h2 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </a>
                </Link>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
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

                <p className="text-lg text-gray-700 mb-4">{post.excerpt}</p>

                <Link href={`/blog/${post.slug}`}>
                  <a className="inline-block text-primary font-semibold hover:underline">
                    Read more →
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
