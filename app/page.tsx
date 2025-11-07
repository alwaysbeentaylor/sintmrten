'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, MapPin, Heart, Sparkles, Leaf, BookOpen } from 'lucide-react'
import StatsSection from '@/components/StatsSection'
import GallerySection from '@/components/GallerySection'
import FeaturesSection from '@/components/FeaturesSection'
import EnrollmentSection from '@/components/EnrollmentSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Welkom bij onze school
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Vrije Basisschool{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Sint-Maarten
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed"
            >
              Een muzische, groene en eigentijdse leerschool waar elk kind zich thuis voelt
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
            >
              En kan groeien naar zijn volle potentieel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#inschrijven"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Schrijf je kind in
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#over-ons"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Ontdek onze school
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Enrollment Section */}
      <EnrollmentSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
