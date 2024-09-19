import { posts } from '@/constants/fakedata'
import PostCard from './components/PostCard'

export default function Feed () {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit'>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  )
}
