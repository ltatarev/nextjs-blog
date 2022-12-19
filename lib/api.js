import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, locale, fields) {
  const realSlug = slug.replace(/-(en|hr)\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}-${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(locale, fields) {
  const slugs = getPostSlugs();

  return slugs.map((slug) => getPostBySlug(slug, locale, fields)).sort((post1, post2) => (post1.id > post2.id ? -1 : 1));
}
