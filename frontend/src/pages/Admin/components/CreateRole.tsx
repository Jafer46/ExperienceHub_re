import CustomFormField from '@/components/CustomFormField'
import SubmitButton from '@/components/SubmitButton'
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
import { Form } from '@/components/ui/form'
import { FormFieldType } from '@/constants/formConstants'
import { roleFormValidation } from '@/constants/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMediaQuery } from '@uidotdev/usehooks'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function CreateRole () {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof roleFormValidation>>({
    resolver: zodResolver(roleFormValidation),
    defaultValues: {
      name: '',
      description: '',
      generalRole: ''
    }
  })

  function onSubmit (values: z.infer<typeof roleFormValidation>) {
    setIsLoading(true)
  }

  function CreateRoleForm () {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-2'
        >
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name='name'
            label='Name'
            placeHolder='ex. Admin'
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.TEXTAREA}
            name='description'
            label='Description'
            placeHolder='wow'
          />
          <SubmitButton isLoading={isLoading}>Create</SubmitButton>
        </form>
      </Form>
    )
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='outline'>Create Role</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Create Role</DialogTitle>
            <DialogDescription>
              Add neccessary data to create role.
            </DialogDescription>
          </DialogHeader>
          <CreateRoleForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>Create Role</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Create Role</DrawerTitle>
          <DrawerDescription>
            Add neccessary data to create role.
          </DrawerDescription>
        </DrawerHeader>
        <CreateRoleForm />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
