import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allAuthors } from 'contentlayer/generated'
import InvestigationLayout from '@/layouts/InvestigationLayout'

export const generateStaticParams = async () => {
  const posts = allBlogs.filter((post) => post.draft === false && post.doi) // Only investigations
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) {
    return {}
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = post.authors.map((author) => allAuthors.find((p) => p.slug === author))
  const imageList = [post.socialImage]

  const ogImages = imageList.map((img) => {
    return {
      url: img,
      alt: post.title,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: 'Presente',
      images: ogImages,
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: authors.map((author) => author?.name || ''),
    },
    twitter: {
      title: post.title,
      description: post.summary,
      images: ogImages,
    },
  }
}

export default async function Page({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) => allAuthors.find((p) => p.slug === author))
  const MDXContent = getMDXComponent(post.body.code)

  return (
    <InvestigationLayout content={post} authorDetails={authors}>
      <MDXContent />
    </InvestigationLayout>
  )
}
