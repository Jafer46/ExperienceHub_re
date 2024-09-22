import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer'
import { Label } from '@/components/ui/label'
import { Role } from '@/constants/schema'
import { useMediaQuery } from '@uidotdev/usehooks'
import React from 'react'

export default function ViewRole ({
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
            <DialogTitle>Role Details</DialogTitle>
            <DialogDescription>Details about {role.name}</DialogDescription>
          </DialogHeader>
          <Label className='flex gap-2'>
            Name: <p className='text-gray-500'>{role.name}</p>
          </Label>
          <Label className='flex gap-2'>
            Description: <p className='text-gray-500'>{role.description}</p>
          </Label>
          <Label className='flex gap-2'>
            General Role: <p className='text-gray-500'>{role.generalRole}</p>
          </Label>
          <div className='flex gap-2'>
            <Label>Routes:</Label>
            <div>
              {role.allowedRoutes?.map(route => (
                <p>{route.path}</p>
              ))}
            </div>
          </div>
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
          <DrawerTitle>Role Details</DrawerTitle>
          <DrawerDescription>Details of {role.name}</DrawerDescription>
        </DrawerHeader>
        <div className='p-4 flex flex-col gap-4'>
          <Label className='flex gap-2'>
            Name: <p className='text-gray-500'>{role.name}</p>
          </Label>
          <Label className='flex gap-2'>
            Description: <p className='text-gray-500'>{role.description}</p>
          </Label>
          <Label className='flex gap-2'>
            General Role: <p className='text-gray-500'>{role.generalRole}</p>
          </Label>
          <div className='flex gap-2'>
            <Label>Routes:</Label>
            <div>
              {role.allowedRoutes?.map(route => (
                <p>{route.path}</p>
              ))}
            </div>
          </div>
        </div>
        <DrawerFooter className='pt-2'>
          <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
