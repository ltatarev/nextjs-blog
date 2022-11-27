export function mapMorePosts(posts) {
  const tmp = [...posts];

  const result = [];

  while (tmp.length) {
    result.push(tmp.splice(0, 2));
  }

  return result;
}
