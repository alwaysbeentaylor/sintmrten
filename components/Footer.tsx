import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sint-Maarten</h3>
            <p className="text-sm leading-relaxed">
              Een muzische, groene, vernieuwende, zorgzame, eigentijdse en christelijke leerschool sinds 1899.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Snelle Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#over-ons" className="hover:text-white transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/#inschrijven" className="hover:text-white transition-colors">
                  Inschrijven
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Schoolreglement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kalender
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Documenten
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Vacatures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Kloosterstraat 4a</p>
                  <p>8340 Sijsele</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+3250363225" className="hover:text-white transition-colors">
                  050 36 32 25
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@vrijebasisschoolsijsele.be"
                  className="hover:text-white transition-colors"
                >
                  info@vrijebasisschoolsijsele.be
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>Ma-Di-Do-Vr: 08:30-12:10 / 13:30-15:30</p>
                  <p>Wo: 08:30-12:10</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Vrije Basisschool Sint-Maarten | Alle rechten voorbehouden
          </p>
        </div>
      </div>
    </footer>
  )
}

