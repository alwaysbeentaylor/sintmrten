import { z } from 'zod'

export const enrollmentSchema = z.object({
  parentName: z.string().min(2, 'Naam moet minimaal 2 tekens bevatten'),
  email: z.string().email('Ongeldig email adres'),
  phone: z.string().min(9, 'Ongeldig telefoonnummer'),
  childName: z.string().min(2, 'Naam kind moet minimaal 2 tekens bevatten'),
  birthDate: z.string().min(1, 'Geboortedatum is verplicht'),
  location: z.enum(['kloosterstraat', 'hovingenlaan']).refine((val) => val === 'kloosterstraat' || val === 'hovingenlaan', {
    message: 'Selecteer een locatie',
  }),
  comments: z.string().optional(),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Naam moet minimaal 2 tekens bevatten'),
  email: z.string().email('Ongeldig email adres'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Onderwerp moet minimaal 3 tekens bevatten'),
  message: z.string().min(10, 'Bericht moet minimaal 10 tekens bevatten'),
})

export type EnrollmentFormData = z.infer<typeof enrollmentSchema>
export type ContactFormData = z.infer<typeof contactSchema>

