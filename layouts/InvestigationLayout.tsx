'use client'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function InvestigationLayout({
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const {
    filePath,
    path,
    slug,
    date,
    title,
    tags,
    doi,
    author,
    publicationDate,
    category,
    topic,
    peerReviewed,
    downloads,
  } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            href="/investigaciones"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Atrás
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Document Thumbnail and Actions */}
          <div className="lg:col-span-1">
            {/* Document Thumbnail */}
            <div className="mb-6 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <div className="flex aspect-[3/4] items-center justify-center rounded border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
                <div className="p-4 text-center">
                  <div className="mb-2 text-lg font-bold text-gray-800 dark:text-gray-200">
                    {title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Presente</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  const citation = `${author || 'Presente'}. (${publicationDate || new Date(date).getFullYear()}). ${title}. Presente.`
                  navigator.clipboard.writeText(citation)
                  alert('Cita copiada al portapapeles')
                }}
                className="w-full rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white transition-colors hover:bg-yellow-600"
              >
                Como citar
              </button>
              <button
                onClick={() => {
                  const metadata = `Título: ${title}\nAutor: ${author || 'Presente'}\nFecha: ${publicationDate || new Date(date).toLocaleDateString()}\nCategoría: ${category || 'Documento'}\nPáginas: ${content.pages || 'No disponible'}\nTamaño: ${content.fileSize || 'No disponible'}`
                  navigator.clipboard.writeText(metadata)
                  alert('Metadatos copiados al portapapeles')
                }}
                className="w-full rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white transition-colors hover:bg-yellow-600"
              >
                Ver metadatos
              </button>
              {content.pdfUrl && (
                <a
                  href={content.pdfUrl}
                  className="block w-full rounded-lg bg-yellow-500 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-yellow-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar PDF
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Metadata */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              {/* Metadata Items */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Author */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <span className="font-medium text-gray-900 dark:text-gray-100">AUTOR</span>
                    <span className="text-right text-gray-600 dark:text-gray-400">La Aparicio</span>
                  </div>
                </div>

                {/* Publication Date */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      FECHA DE EMISIÓN
                    </span>
                    <span className="text-right text-gray-600 dark:text-gray-400">
                      {publicationDate || 'Dic 2001'}
                    </span>
                  </div>
                </div>

                {/* Read Section */}
                <div className="p-4">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="font-medium text-gray-900 dark:text-gray-100">LEER</span>
                  </div>
                  {downloads && (
                    <div className="space-y-3">
                      {/* Spanish Version */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            className="mr-2 h-5 w-5 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Español ({downloads.español?.toLocaleString()} descargas)
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <a
                            href={content.pdfUrl || '#'}
                            className="rounded bg-yellow-500 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-yellow-600"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver en línea
                          </a>
                          <a
                            href={content.pdfUrl || '#'}
                            className="rounded bg-yellow-500 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-yellow-600"
                            download
                          >
                            Descarga
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Topic */}
                {topic && (
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <span className="font-medium text-gray-900 dark:text-gray-100">TEMA</span>
                      <span className="max-w-xs text-right text-sm text-gray-600 dark:text-gray-400">
                        {topic}
                      </span>
                    </div>
                  </div>
                )}

                {/* Category */}
                {category && (
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        CATEGORÍA
                      </span>
                      <span className="text-right text-gray-600 dark:text-gray-400">
                        {category}
                      </span>
                    </div>
                  </div>
                )}

                {/* Pages */}
                {content.pages && (
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <span className="font-medium text-gray-900 dark:text-gray-100">PÁGINAS</span>
                      <span className="text-right text-gray-600 dark:text-gray-400">
                        {content.pages}
                      </span>
                    </div>
                  </div>
                )}

                {/* File Size */}
                {content.fileSize && (
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <span className="font-medium text-gray-900 dark:text-gray-100">TAMAÑO</span>
                      <span className="text-right text-gray-600 dark:text-gray-400">
                        {content.fileSize}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Abstract/Description Section */}
        <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">Resumen</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">{content.summary}</p>
        </div>

        {/* Content */}
        <div className="prose max-w-none dark:prose-invert">{children}</div>

        {/* Tags */}
        {tags && (
          <div className="pb-6 pt-6 text-center xl:pb-8">
            <h2 className="mb-2 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Tags
            </h2>
            <div className="flex flex-wrap justify-center">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <footer>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-8">
            <div className="my-4 flex flex-col space-y-4 pt-4 md:flex-row md:space-x-4 md:space-y-0 md:pt-8">
              {prev && (
                <Link
                  href={`/${prev.path}`}
                  className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Previous post: ${prev.title}`}
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {prev.title}
                </Link>
              )}
              {next && (
                <Link
                  href={`/${next.path}`}
                  className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Next post: ${next.title}`}
                >
                  {next.title}
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
