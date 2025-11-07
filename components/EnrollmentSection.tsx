'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import NextImage from 'next/image'
import { submitEnrollment } from '@/app/actions/enrollment'
import { CheckCircle, Loader2 } from 'lucide-react'

export default function EnrollmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await submitEnrollment(formData)
      setSubmitStatus(result)
      if (result.success) {
        ;(document.getElementById('enrollment-form') as HTMLFormElement)?.reset()
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Er is een fout opgetreden' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} id="inschrijven" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <NextImage
          src="https://i.ibb.co/wZM051C2/Schermafbeelding-2025-11-07-205318.png"
          alt="Background"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Schrijf je kind in</h2>
          <p className="text-xl text-white/90">
            Geïnteresseerd in onze school? Vul onderstaand formulier in en we nemen zo snel mogelijk contact met je op!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form
            id="enrollment-form"
            action={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-gray-900"
          >
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.success
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus.success ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="w-5 h-5">⚠️</span>
                )}
                <span>{submitStatus.message}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="parentName" className="block text-sm font-semibold mb-2">
                  Naam ouder/voogd *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Jouw naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="jouw@email.be"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Telefoon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+32 XXX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="childName" className="block text-sm font-semibold mb-2">
                  Naam kind *
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Naam van je kind"
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-semibold mb-2">
                  Geboortedatum kind *
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold mb-2">
                  Voorkeur locatie *
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Kies een locatie</option>
                  <option value="kloosterstraat">Kloosterstraat</option>
                  <option value="hovingenlaan">Hovingenlaan</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="comments" className="block text-sm font-semibold mb-2">
                Extra vragen of opmerkingen
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Vertel ons wat meer..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-blue-600 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verzenden...
                </>
              ) : (
                'Verstuur aanvraag'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

