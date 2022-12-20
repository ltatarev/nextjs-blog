import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getCleanSlugs() {
  const slugs = getPostSlugs();

  const cleanSlugs = slugs.map((slug) => slug.replace(/-(en|hr)\.md$/, ''));

  return [...new Set(cleanSlugs)];
}

export function getPostBySlug(slug, locale, fields) {
  const fullPath = join(postsDirectory, `${slug}-${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
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
  const slugs = getCleanSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug, locale, fields))
    .filter((post) => post.locale === locale)
    .sort((post1, post2) => (post1.id > post2.id ? -1 : 1));
}
