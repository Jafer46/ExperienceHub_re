import { z } from 'zod'

export const userFormValidation = z.object({
  username: z
    .string()
    .min(3, 'User name must be at least two least letters.')
    .max(50, 'Usr name must be less than 50 letters.'),
  email: z.string().email('Invalid email.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 letters.')
    .max(16, 'Password must be below 16 letters.'),
  role: z.string().optional(),
  phone: z
    .string()
    .refine(phone => /^\+\d{10,15}$/.test(phone), 'Invalid phone number')
    .optional()
})
