import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Role } from '@/constants/schema'
import { useMediaQuery } from '@uidotdev/usehooks'
import React from 'react'

export default function DeleteRole ({
  open,
  setOpen,
  role
}: {
  open: boolean
  setOpen: any
  role: Role
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger asChild>
          <Button variant='outline'>Delete</Button>
        </DialogTrigger> */}
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Delete Role</DialogTitle>
            <DialogDescription>
              Add neccessary data to create role.
            </DialogDescription>
          </DialogHeader>
          {role.name}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      {/* <DrawerTrigger asChild>
        <Button variant='outline'>Delete</Button>
      </DrawerTrigger> */}
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Delete Role</DrawerTitle>
          <DrawerDescription>
            Add neccessary data to create role.
          </DrawerDescription>
        </DrawerHeader>
        {role.name}
        <DrawerFooter className='pt-2'>
          <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
