// src/services/contentful.js
const SPACE_ID     = 'r0oppl6ps0ka'
const ACCESS_TOKEN = 'XtEmvu5bIkxcqt70IufBh1109jFiaIkf-FU9pksLEpI'
const ENVIRONMENT  = 'master'
const CONTENT_TYPE = 'pageBlogPost'

/**
 * Devuelve la lista de posts
 */
export async function fetchBlogPosts() {
  const res  = await fetch(
    `https://cdn.contentful.com/spaces/${SPACE_ID}` +
    `/environments/${ENVIRONMENT}/entries` +
    `?access_token=${ACCESS_TOKEN}` +
    `&content_type=${CONTENT_TYPE}` +
    `&include=1`
  )
  const data   = await res.json()
  const assets = data.includes?.Asset || []
  return data.items.map(item => {
    const img   = assets.find(a => a.sys.id === item.fields.featuredImage.sys.id)
    const url   = img?.fields.file.url
    return {
      id:       item.sys.id,
      slug:     item.fields.slug,
      title:    item.fields.title,
      subtitle: item.fields.shortDescription,
      date:     item.fields.publishedDate,
      imageUrl: url ? `https:${url}` : null,
    }
  })
}

/**
 * Devuelve un sólo post buscándolo por slug
 */
export async function fetchBlogPostBySlug(slug) {
  const url    = `https://cdn.contentful.com/spaces/${SPACE_ID}` +
                 `/environments/${ENVIRONMENT}/entries`
  const params = new URLSearchParams({
    access_token: ACCESS_TOKEN,
    content_type: CONTENT_TYPE,
    'fields.slug': slug,
    include: '1'
  })
  const res  = await fetch(`${url}?${params}`)
  const data = await res.json()
  if (!data.items.length) throw new Error('Post no encontrado')

  const item   = data.items[0]
  const assets = data.includes?.Asset || []
  const img    = assets.find(a => a.sys.id === item.fields.featuredImage.sys.id)
  const urlImg = img?.fields.file?.url

  return {
    id:       item.sys.id,
    slug:     item.fields.slug,
    title:    item.fields.title,
    date:     item.fields.publishedDate,
    imageUrl: urlImg ? `https:${urlImg}` : null,
    content:  item.fields.content,
  }
}
