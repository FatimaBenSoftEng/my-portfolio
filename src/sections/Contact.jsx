import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/FatimaBenSoftEng', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/fatima-ben-ouakass-77998724b', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/fa.ti_____ma/', label: 'Instagram' },
]

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-16 px-4 md:px-6 lg:px-8 relative flex items-center"
    >
      <div className="container mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Me Contacter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Une question, un projet ou juste envie de discuter ?{' '}
            <span className="text-cyan-400 font-semibold">N'hésitez pas !</span>
          </p>
        </motion.div>

        {/* Layout 3 colonnes — hover agrandit la card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="grid lg:grid-cols-3 gap-0 glass rounded-2xl overflow-hidden max-w-5xl mx-auto"
        >

          {/* Colonne 1 — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden"
            style={{ minHeight: '420px' }}
          >
            <img
              src="/Fatima.jpeg"
              alt="Fatima BEN OUAKASS"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: '420px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-bold text-lg leading-tight">Fatima</h3>
              <p className="text-purple-300 font-semibold text-sm">BEN OUAKASS</p>
              <p className="text-gray-300 text-xs mt-1">Ingénieure Full Stack</p>
            </div>
          </motion.div>

          {/* Colonne 2 — Coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-8 border-l border-r border-white/10 flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Restons en contact</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Je suis ouverte aux nouvelles opportunités et collaborations. Contactez-moi via l'un des moyens ci-dessous.
            </p>

            {/* Email */}
            <motion.a
              href="mailto:fatimabenouakass19@gmail.com"
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shrink-0 shadow-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors">
                  fatimabenouakass19@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Téléphone */}
            <motion.a
              href="tel:+212637145728"
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shrink-0 shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Téléphone</p>
                <p className="text-white text-sm font-semibold group-hover:text-purple-400 transition-colors">
                  +212 637 145 728
                </p>
              </div>
            </motion.a>

            {/* Localisation */}
            <motion.div whileHover={{ x: 6 }} className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shrink-0 shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Localisation</p>
                <p className="text-white text-sm font-semibold">Rabat, Maroc</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne 3 — Infos + Réseaux */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 flex flex-col justify-between relative z-10"
          >
            {/* Infos */}
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Statut</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold">Disponible</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Basée à</p>
                <p className="text-white font-semibold">Rabat,</p>
                <p className="text-gray-300 text-sm">Maroc 🇲🇦</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Spécialité</p>
                <p className="text-white font-semibold">Full Stack</p>
                <p className="text-gray-300 text-sm">Angular · Spring Boot</p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Réseaux</p>
              <div className="flex gap-3 relative z-10">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.15 }}
                      className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact