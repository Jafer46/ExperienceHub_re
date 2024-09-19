import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import ImageCarousel from './ImageCarousel'
import { Post } from '@/constants/schema'

function formatRates (numberOfRates: number) {
  if (numberOfRates >= 1000) {
    return (numberOfRates / 1000).toFixed(1) + 'k'
  }
  return numberOfRates.toString()
}

export default function PostCard ({ post }: { post: Post }) {
  return (
    <Card className='w-[365px] border-0 shadow-white'>
      <CardHeader className='pb-1'>
        <ImageCarousel images={post.pictures} />
        <CardTitle className='text-xl flex items-center'>
          <div className='overflow-hidden whitespace-nowrap text-ellipsis w-[70%]'>
            {post.name}
          </div>
          ✬{post.rate} ({formatRates(post.number_of_rates)})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-lg line-clamp-2'>
          {post.description}
        </CardDescription>
        <CardDescription className='text-lg'>
          {post.number_of_beds} beds
        </CardDescription>
        <CardDescription className='text-lg text-black font-semibold'>
          ${post.payment_per_night} night
        </CardDescription>
      </CardContent>
    </Card>
  )
}
