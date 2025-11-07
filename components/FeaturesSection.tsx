'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Leaf, Lightbulb, Heart, Sparkles, Cross } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Muzisch & Creatief',
    description: 'We stimuleren creativiteit door muziek, kunst en expressie. Elk kind krijgt de kans om zijn talenten te ontdekken.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Leaf,
    title: 'Groen & Duurzaam',
    description: 'Onze school heeft aandacht voor natuur en milieu. Kinderen leren respect voor de wereld om hen heen.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Lightbulb,
    title: 'Vernieuwend',
    description: 'We blijven innoveren met moderne lesmethodes en digitale tools, terwijl we aandacht houden voor wat écht telt.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Zorgzaam',
    description: 'Elk kind krijgt de begeleiding die het nodig heeft. We staan als team klaar voor elke leerling.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Eigentijds',
    description: 'We bereiden kinderen voor op de toekomst met relevante vaardigheden en moderne inzichten.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cross,
    title: 'Christelijke Waarden',
    description: 'Respect, empathie en samen leven vormen de basis van onze schoolcultuur.',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="over-ons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Waarom kiezen voor Sint-Maarten?
          </h2>
          <p className="text-xl text-gray-600">
            Een school waar leren en groeien hand in hand gaan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-2xl`} style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.1), 0 0 40px rgba(34, 197, 94, 0.05), 0 0 60px rgba(239, 68, 68, 0.05)'
                }} />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group-hover:border-blue-500/30">
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

