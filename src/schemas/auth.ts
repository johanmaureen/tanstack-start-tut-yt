import * as z from 'zod'

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
})

export const signupSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  fullName: z.string().min(5, 'Full name must be at least 5 characters.'),
})
