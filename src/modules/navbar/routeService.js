export function isRouteActive(link, router) {
  if (link.route === '/') {
    return router.route === '/' && link.route === '/';
  }

  return router.route.match(link.route);
}
