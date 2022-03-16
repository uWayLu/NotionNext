import BLOG from '@/blog.config'
import Head from 'next/head'

const CommonHead = ({ meta, children }) => {
  let url = BLOG?.PATH?.length ? `${BLOG.LINK}/${BLOG.PATH}` : BLOG.LINK
  if (meta) {
    url = `${url}/${meta.slug}`
  }
  const title = meta?.title || BLOG.TITLE
  const description = meta?.description || BLOG.DESCRIPTION
  const type = meta?.type || 'website'
  const keywords = meta?.tags || BLOG.KEYWORDS

  return <Head>
    <title>{title}</title>
    <meta name='theme-color' content={BLOG.BACKGROUND_DARK} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name='robots' content='follow, index' />
    <meta charSet='UTF-8' />
    {BLOG.SEO_GOOGLE_SITE_VERIFICATION && (
      <meta name='google-site-verification' content={BLOG.SEO_GOOGLE_SITE_VERIFICATION} />
    )}
    <meta name='keywords' content={keywords} />
    <meta name='description' content={description} />
    <meta property='og:locale' content={BLOG.LANG} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:url' content={url}
    />
    <meta property='og:type' content={type} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:title' content={title} />
    {JSON.parse(BLOG.ANALYTICS_BUSUANZI_ENABLE) && <meta name="referrer" content="no-referrer-when-downgrade"/> }
    {meta?.type === 'article' && (
      <>
        <meta
          property='article:published_time'
          content={meta.date || meta.createdTime}
        />
        <meta property='article:author' content={BLOG.AUTHOR} />
      </>
    )}
    {children}
  </Head>
}

export default CommonHead
