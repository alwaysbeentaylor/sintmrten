'use server'

import { prisma } from '@/lib/db'
import { sendEnrollmentEmail } from '@/lib/email'
import { enrollmentSchema } from '@/lib/validations'
import { revalidatePath } from 'next/cache'

export async function submitEnrollment(formData: FormData) {
  try {
    const data = {
      parentName: formData.get('parentName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      childName: formData.get('childName') as string,
      birthDate: formData.get('birthDate') as string,
      location: formData.get('location') as string,
      comments: formData.get('comments') as string | null,
    }

    // Validate data
    const validated = enrollmentSchema.parse(data)

    // Save to database
    const enrollment = await prisma.enrollment.create({
      data: {
        parentName: validated.parentName,
        email: validated.email,
        phone: validated.phone,
        childName: validated.childName,
        birthDate: new Date(validated.birthDate),
        location: validated.location,
        comments: validated.comments || null,
      },
    })

    // Send email notification
    await sendEnrollmentEmail({
      ...validated,
      birthDate: new Date(validated.birthDate).toLocaleDateString('nl-BE'),
    })

    revalidatePath('/')
    return { success: true, message: 'Inschrijving succesvol verzonden!' }
  } catch (error: any) {
    console.error('Enrollment error:', error)
    if (error.errors) {
      return {
        success: false,
        message: error.errors[0]?.message || 'Er is een fout opgetreden',
      }
    }
    return { success: false, message: 'Er is een fout opgetreden bij het verzenden' }
  }
}

