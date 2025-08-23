import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allAuthors } from 'contentlayer/generated'
import InvestigationLayout from '@/layouts/InvestigationLayout'
import { components } from '@/components/MDXComponents'
import { coreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'

export const generateStaticParams = async () => {
  const posts = allBlogs.filter((post) => post.draft === false && post.doi) // Only investigations
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) {
    return {}
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authorList = post?.authors || ['default']
  const authors = authorList.map((author) => allAuthors.find((p) => p.slug === author))

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: 'Presente',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: authors.map((author) => author?.name || ''),
    },
    twitter: {
      title: post.title,
      description: post.summary,
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })

  return (
    <InvestigationLayout content={post} authorDetails={authorDetails}>
      <MDXLayoutRenderer code={post.body.code} components={components} />
    </InvestigationLayout>
  )
}
