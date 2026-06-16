export interface BlogPostPage {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  category: string;
  status?: 'published' | 'draft';
  content?: string;
}

// Parse frontmatter manually (avoid gray-matter which needs Buffer)
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content };
  }

  const frontmatter = match[1];
  const body = match[2];
  const data: Record<string, any> = {};

  // Parse YAML-like frontmatter
  frontmatter.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  });

  return { data, content: body };
}

// Import all markdown files as raw strings
const postModules = import.meta.glob<string>('../blog/posts/**/*.md', { as: 'raw', eager: true }) as Record<string, string>;

export function getAllPosts(): BlogPostPage[] {
  const posts: BlogPostPage[] = [];

  for (const [path, content] of Object.entries(postModules)) {
    const { data } = parseFrontmatter(content);
    posts.push(data as BlogPostPage);
  }

  // Filter to only published posts, sort by date (newest first)
  return posts
    .filter(post => post.status !== 'draft')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): (BlogPostPage & { content: string }) | null {
  for (const [path, content] of Object.entries(postModules)) {
    const { data, content: postContent } = parseFrontmatter(content);

    if (data.slug === slug) {
      return {
        ...data as BlogPostPage,
        content: postContent,
      };
    }
  }

  return null;
}
