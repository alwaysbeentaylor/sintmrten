# Vrije Basisschool Sint-Maarten - Moderne Website

Een moderne, innovatieve website voor Vrije Basisschool Sint-Maarten gebouwd met de nieuwste technologieën.

## 🚀 Technologieën

- **Next.js 16** - React framework met App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first CSS
- **Prisma** - Type-safe database ORM
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Nodemailer** - Email notifications
- **Radix UI** - Accessible UI components

## ✨ Features

- ✅ Moderne, responsive design
- ✅ Server-side rendering (SSR)
- ✅ Database integratie met Prisma
- ✅ Form handling met Server Actions
- ✅ Email notificaties
- ✅ Smooth animations met Framer Motion
- ✅ SEO optimized
- ✅ Accessible components
- ✅ Type-safe throughout

## 📦 Installatie

1. Installeer dependencies:
```bash
npm install
```

2. Setup database:
```bash
npx prisma generate
npx prisma db push
```

3. Maak een `.env` bestand:
```env
DATABASE_URL="file:./dev.db"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM="your-email@gmail.com"
ADMIN_EMAIL="info@vrijebasisschoolsijsele.be"
```

4. Start development server:
```bash
npm run dev
```

## 🗄️ Database Schema

De website gebruikt SQLite met Prisma en bevat de volgende modellen:

- **Enrollment** - Inschrijvingen van kinderen
- **ContactMessage** - Contactformulier berichten
- **NewsletterSubscriber** - Nieuwsbrief abonnees

## 📁 Project Structuur

```
├── app/
│   ├── actions/          # Server Actions
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React components
├── lib/                  # Utilities
│   ├── db.ts            # Prisma client
│   ├── email.ts         # Email service
│   └── validations.ts   # Zod schemas
└── prisma/
    └── schema.prisma    # Database schema
```

## 🎨 Componenten

- **Header** - Navigatie met mobile menu
- **Footer** - Footer met contact info
- **StatsSection** - Statistieken
- **GallerySection** - Foto galerij
- **FeaturesSection** - Features grid
- **EnrollmentSection** - Inschrijfformulier
- **ContactSection** - Contact informatie

## 🚢 Deployment

De website kan worden gedeployed op:
- **Vercel** (aanbevolen voor Next.js)
- **Netlify**
- **Railway**
- Elke andere Node.js hosting provider

Voor productie:
1. Update `.env` met productie database URL
2. Configureer SMTP instellingen
3. Run `npm run build`
4. Deploy naar je hosting provider

## 📝 Licentie

Alle rechten voorbehouden - Vrije Basisschool Sint-Maarten
