import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 md:px-6 lg:px-8 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Conçu et développé par{' '}
            <span className="text-blue-400 font-semibold">
              Fatima BEN OUAKASS
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} Tous droits réservés
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer