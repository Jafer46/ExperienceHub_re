import { LeftSheet } from '@/components/LeftSheet'
import { useMediaQuery } from '@uidotdev/usehooks'

export default function Sidebar () {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)')

  if (isMobile) {
    return <LeftSheet />
  }
  return <div>Not mobile</div>
}
