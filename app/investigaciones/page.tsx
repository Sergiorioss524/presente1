import { allBlogs } from 'contentlayer/generated'
import { allAuthors } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

const MAX_DISPLAY = 5

function sortPosts(posts: CoreContent<Blog>[]) {
  return posts.sort((post1, post2) => {
    const date1 = new Date(post1.date).getTime()
    const date2 = new Date(post2.date).getTime()
    return date2 - date1
  })
}

export default function InvestigacionesPage() {
  const filteredBlogPosts = allBlogs.filter((post) => {
    return !post.draft && post.pdfUrl // Only show posts with PDF (investigations)
  })

  const sortedPosts = sortPosts(filteredBlogPosts)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Investigaciones
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Documentos de investigación y estudios académicos sobre Bolivia
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!sortedPosts.length && 'No posts found.'}
          {sortedPosts.slice(0, MAX_DISPLAY).map((post) => {
            const {
              path,
              date,
              title,
              summary,
              tags,
              author,
              publicationDate,
              category,
              peerReviewed,
            } = post
            const authorList = post?.authors || ['default']
            const authors = authorList.map((author) => allAuthors.find((p) => p.slug === author))
            return (
              <li key={path} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/investigaciones/${post.slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {authors.map((author) => (
                              <span key={author?.name}>
                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                  {author?.name}
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        {peerReviewed && (
                          <span className="flex items-center text-green-600 dark:text-green-400">
                            <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Peer Reviewed
                          </span>
                        )}
                        {category && (
                          <span className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
                            {category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {sortedPosts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/investigaciones"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            Ver todas las investigaciones &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
