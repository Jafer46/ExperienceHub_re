import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { User2 } from 'lucide-react'
import UserMessageList from './userMessageList'

export default function UserListDrawer () {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden p-0'>
          <User2 className='size-4' />
          <span className='sr-only'>Settings</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='max-h-[80vh]'>
        <DrawerHeader>
          <DrawerTitle>Chat List</DrawerTitle>
          <DrawerDescription>
            Click one to start/continue chatting
          </DrawerDescription>
        </DrawerHeader>
        <UserMessageList />
      </DrawerContent>
    </Drawer>
  )
}
