'use server'

import { prisma } from '@/lib/db'
import { sendContactEmail } from '@/lib/email'
import { contactSchema } from '@/lib/validations'
import { revalidatePath } from 'next/cache'

export async function submitContact(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string | null,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    // Validate data
    const validated = contactSchema.parse(data)

    // Save to database
    await prisma.contactMessage.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone || null,
        subject: validated.subject,
        message: validated.message,
      },
    })

    // Send email notification
    await sendContactEmail(validated)

    revalidatePath('/')
    return { success: true, message: 'Bericht succesvol verzonden!' }
  } catch (error: any) {
    console.error('Contact error:', error)
    if (error.errors) {
      return {
        success: false,
        message: error.errors[0]?.message || 'Er is een fout opgetreden',
      }
    }
    return { success: false, message: 'Er is een fout opgetreden bij het verzenden' }
  }
}

