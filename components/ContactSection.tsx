'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, User, Clock } from 'lucide-react'

const locations = [
  {
    name: 'Locatie Kloosterstraat',
    address: 'Kloosterstraat 4a',
    city: '8340 Sijsele',
    phone: '050 36 32 25',
    icon: MapPin,
  },
  {
    name: 'Locatie Hovingenlaan',
    address: 'Hovingenlaan',
    city: '8340 Sijsele',
    phone: '050 36 09 71',
    icon: MapPin,
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Contact & Locaties
          </h2>
          <p className="text-xl text-gray-600">
            We staan klaar om al je vragen te beantwoorden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="space-y-6">
              {locations.map((location, index) => {
                const Icon = location.icon
                return (
                  <div
                    key={location.name}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{location.name}</h4>
                      <p className="text-gray-600">
                        {location.address}
                        <br />
                        {location.city}
                      </p>
                      <p className="text-gray-600 mt-2">
                        <strong>Tel:</strong> {location.phone}
                      </p>
                    </div>
                  </div>
                )
              })}

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a
                    href="mailto:info@vrijebasisschoolsijsele.be"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    info@vrijebasisschoolsijsele.be
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Directeur</h4>
                  <p className="text-gray-600">
                    Chris Claeys
                    <br />
                    <a href="tel:+32496235701" className="text-blue-600 hover:text-blue-700">
                      0496 23 57 01
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Schooluren</h4>
                  <p className="text-gray-600">
                    Ma-Di-Do-Vr: 08:30-12:10 / 13:30-15:30
                    <br />
                    Wo: 08:30-12:10
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="h-full min-h-[500px] bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.123456789!2d3.1234567!3d51.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzI0LjQiTiAzwrAwNyc0NC40IkU!5e0!3m2!1snl!2sbe!4v1234567890123!5m2!1snl!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

