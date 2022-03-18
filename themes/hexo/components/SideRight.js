import Card from './Card'
import CategoryGroup from './CategoryGroup'
import LatestPostsGroup from './LatestPostsGroup'
import TagGroups from './TagGroups'
import Catalog from './Catalog'
import { InfoCard } from './InfoCard'
import { AnalyticsCard } from './AnalyticsCard'

export default function SideRight (props) {
  const {
    post, currentCategory, categories, latestPosts, tags,
    currentTag, showCategory, showTag, slot
  } = props

  return (
    <div className={'md:w-80 p-2 space-y-4'}>
      <InfoCard {...props}/>
      <AnalyticsCard {...props}/>

      {showCategory && (
        <Card>
          <div className='ml-2 mb-1 font-sans'>
            <i className='fas fa-th'/> 分类
          </div>
          <CategoryGroup
            currentCategory={currentCategory}
            categories={categories}
          />
        </Card>
      )}
      {showTag && (
        <Card>
          <TagGroups tags={tags} currentTag={currentTag} />
        </Card>
      )}
      {latestPosts && <Card>
        <LatestPostsGroup posts={latestPosts} />
      </Card>}

      <div className='sticky top-20'>
       {post && post.toc && <Card>
          <Catalog toc={post.toc} />
        </Card>}
        {slot}
      </div>

    </div>
  )
}
