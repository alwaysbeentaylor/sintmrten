import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendEnrollmentEmail(data: {
  parentName: string
  email: string
  phone: string
  childName: string
  birthDate: string
  location: string
  comments?: string
}) {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL || 'info@vrijebasisschoolsijsele.be',
    subject: `Nieuwe inschrijving: ${data.childName}`,
    html: `
      <h2>Nieuwe inschrijving ontvangen</h2>
      <p><strong>Ouder/Voogd:</strong> ${data.parentName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefoon:</strong> ${data.phone}</p>
      <p><strong>Naam kind:</strong> ${data.childName}</p>
      <p><strong>Geboortedatum:</strong> ${data.birthDate}</p>
      <p><strong>Voorkeur locatie:</strong> ${data.location}</p>
      ${data.comments ? `<p><strong>Opmerkingen:</strong> ${data.comments}</p>` : ''}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

export async function sendContactEmail(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL || 'info@vrijebasisschoolsijsele.be',
    subject: `Contactformulier: ${data.subject}`,
    html: `
      <h2>Nieuw contactbericht</h2>
      <p><strong>Naam:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Telefoon:</strong> ${data.phone}</p>` : ''}
      <p><strong>Onderwerp:</strong> ${data.subject}</p>
      <p><strong>Bericht:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

