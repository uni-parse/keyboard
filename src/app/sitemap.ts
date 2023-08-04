const domain = 'http://localhost:3000'

export default async function sitemap() {
  return [...getStaticRoutes()]
}

function getStaticRoutes() {
  const localPaths = [
    '',
  ]

  const staticRoutes = localPaths.map(path => ({
    url: `${domain}/${path}`,
    lastModified: new Date().toISOString(),
  }))

  return staticRoutes
}