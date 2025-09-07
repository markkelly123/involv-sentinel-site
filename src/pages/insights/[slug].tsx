import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { PortableText } from '@portabletext/react'
import { getPost, getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Layout from '../../components/Layout'

interface PostPageProps {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  if (!post) {
    return (
      <Layout title="Post Not Found - Sentinel">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Link href="/insights" className="text-[#66899b] hover:text-white transition-colors">
            Back to Insights
          </Link>
        </div>
      </Layout>
    )
  }

  const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body)

  return (
    <Layout
      title={`${post.title} - Sentinel by Involv`}
      description={post.excerpt || `Read ${post.title} on Sentinel`}
      ogImage={post.mainImage?.asset?.url ? buildImageUrl(post.mainImage.asset.url, 1200, 630, 80) : undefined}
    >
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/insights" className="text-[#66899b] hover:text-white text-sm transition-colors">
            ← Back to Insights
          </Link>
        </nav>

        {/* Main Image */}
        {post.mainImage?.asset?.url && (
          <div className="aspect-video w-full bg-[#1a1d21] rounded-lg overflow-hidden mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={buildImageUrl(post.mainImage.asset.url, 1200, 675, 80)} 
              alt={post.mainImage.alt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span key={category._id} className="bg-[#66899b] px-3 py-1 rounded-full text-sm font-medium text-white">
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>
          
          {post.excerpt && (
            <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>
          )}

          {/* Author and Meta */}
          <div className="flex items-center justify-between py-6 border-t border-b border-white/10">
            <div className="flex items-center">
              {/* Author Avatar */}
              {post.author?.image?.asset?.url ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img 
                  src={buildImageUrl(post.author.image.asset.url, 48, 48, 80)} 
                  alt={post.author.image.alt || post.author.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#66899b] flex items-center justify-center mr-4">
                  <span className="text-lg font-medium text-white">
                    {post.author?.name?.charAt(0).toUpperCase() || '?'}
                  </span>
                </div>
              )}
              
              <div>
                <p className="font-medium text-gray-200">
                  {post.author?.name || 'Unknown Author'}
                </p>
                {post.author?.role && (
                  <p className="text-sm text-gray-400">{post.author.role}</p>
                )}
              </div>
            </div>
            
            <div className="text-right text-sm text-gray-400">
              <p>{new Date(post.publishedAt).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</p>
              <p>{readingTime} min read</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <PortableText 
            value={post.body} 
            components={{
              block: {
                normal: ({children}) => <p className="mb-4 text-gray-200 leading-relaxed">{children}</p>,
                h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-white">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-bold mt-6 mb-3 text-white">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-bold mt-4 mb-2 text-white">{children}</h3>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-[#66899b] pl-4 my-6 italic text-gray-300">
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({children}) => <ul className="list-disc list-inside mb-4 text-gray-200">{children}</ul>,
                number: ({children}) => <ol className="list-decimal list-inside mb-4 text-gray-200">{children}</ol>,
              },
              listItem: {
                bullet: ({children}) => <li className="mb-1">{children}</li>,
                number: ({children}) => <li className="mb-1">{children}</li>,
              },
              marks: {
                strong: ({children}) => <strong className="font-bold text-white">{children}</strong>,
                em: ({children}) => <em className="italic">{children}</em>,
                link: ({children, value}) => (
                  <a href={value.href} className="text-[#66899b] hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              },
              types: {
                image: ({value}: any) => (
                  <div className="my-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={buildImageUrl(value.asset.url, 1000, 562, 80)}
                      alt={value.alt || ''}
                      className="w-full rounded-lg"
                    />
                    {value.caption && (
                      <p className="text-gray-400 text-sm mt-2 text-center italic">
                        {value.caption}
                      </p>
                    )}
                  </div>
                )
              }
            }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-white">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-[#1a1d21] text-gray-300 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Jurisdictions */}
        {post.jurisdictions && post.jurisdictions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-white">Jurisdictions</h3>
            <div className="flex flex-wrap gap-2">
              {post.jurisdictions.map((jurisdiction) => (
                <span key={jurisdiction} className="bg-[#121418] text-gray-200 px-3 py-1 rounded text-sm font-medium">
                  {jurisdiction.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="pt-8 border-top border-white/10">
          <div className="flex justify-between items-center">
            <Link href="/insights" className="text-[#66899b] hover:text-white flex items-center transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              All Insights
            </Link>
            
            <div className="text-right">
              <Link href="/contact" className="bg-[#66899b] hover:bg-opacity-80 text-white px-4 py-2 rounded transition-all duration-200">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all posts that include 'sentinel' in their sites array
  const posts = await getPosts('sentinel', 100)
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current }
  }))

  return {
    paths,
    fallback: 'blocking' // Enable ISR for new posts
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  
  if (!slug) {
    return { notFound: true }
  }

  try {
    const post = await getPost(slug)
    
    if (!post) {
      return { notFound: true }
    }

    // Check if this post is available for the 'sentinel' site
    if (!post.sites.includes('sentinel')) {
      return { notFound: true }
    }

    return {
      props: {
        post,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return { notFound: true }
  }
}