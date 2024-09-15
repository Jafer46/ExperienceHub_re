import { userFormValidation } from '@/constants/validation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Form } from '@/components/ui/form'

export default function CreateAdminForm () {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  async function onSubmit (values: z.infer<typeof userFormValidation>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}></form>
    </Form>
  )
}
