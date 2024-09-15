import { userFormValidation } from '@/constants/validation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Form } from '@/components/ui/form'
import SubmitButton from '@/components/SubmitButton'
import CustomFormField from '@/components/CustomFormField'
import { FormFieldType } from '@/constants/formConstants'

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-4 flex flex-col gap-2'
      >
        <section></section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name='username'
          label='Username'
          placeHolder='ex. jafe34'
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name='email'
          label='Email'
          placeHolder='ex. 123@gmail.com'
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name='password'
          label='Password'
          placeHolder='ex. 12345...'
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name='phone'
          label='Phone'
          placeHolder='ex. +251 90.....'
        />
        <SubmitButton isLoading={isLoading}>Create</SubmitButton>
      </form>
    </Form>
  )
}
