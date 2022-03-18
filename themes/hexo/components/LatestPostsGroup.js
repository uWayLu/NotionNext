import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
const LatestPostsGroup = ({ posts }) => {
  if (!posts) {
    return <></>
  }
  // 获取当前路径
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()

  return <>
      <div className='font-sans mb-2 px-1 flex flex-nowrap justify-between'>
        <div><i className='mr-2 fas fa-archive' />{locale.COMMON.LATEST_POSTS}</div>
      </div>
      {posts.map(post => {
        const selected = currentPath === `${BLOG.PATH}/article/${post.slug}`
        return (
          <Link key={post.id} title={post.title} href={`${BLOG.PATH}/article/${post.slug}`} passHref>
            <a className={ 'my-1 flex '}>
              <div className={ (selected ? 'text-white  bg-blue-400 ' : 'text-gray-500 dark:text-gray-400 ') + ' text-xs py-1.5 flex overflow-x-hidden whitespace-nowrap hover:bg-blue-400 px-2 duration-200 w-full rounded ' +
                'hover:text-white dark:hover:text-white cursor-pointer items-center'}>
                <div className='truncate'>{post.title}</div>
              </div>
            </a>
          </Link>
        )
      })}
    </>
}
export default LatestPostsGroup
