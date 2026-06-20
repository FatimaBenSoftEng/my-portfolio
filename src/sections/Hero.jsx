import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'
import ParticleBackground from '../components/ParticleBackground'

// ✨ Hook typewriter en boucle infinie
const useTypewriterLoop = (text, speed = 55, pauseAfter = 1500, deleteSpeed = 30) => {
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer
    if (!isDeleting && displayed.length < text.length) {
      timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed)
    } else if (!isDeleting && displayed.length === text.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseAfter)
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length - 1)), deleteSpeed)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
    }
    return () => clearTimeout(timer)
  }, [displayed, isDeleting, text, speed, pauseAfter, deleteSpeed])

  return { displayed, isDeleting }
}

// 🌟 Génération des étoiles
const generateStars = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
  }))

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Hero = () => {
  const [stars] = useState(() => generateStars(80))

  const { displayed: typedTitle } = useTypewriterLoop(
    "Ingénieure Full Stack",
    55,
    2000,
    30
  )

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950"
    >
      {/* ✨ Étoiles animées */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <ParticleBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">

          {/* Colonne gauche */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 lg:space-y-4"
          >
            {/* Nom */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Fatima</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                BEN OUAKASS
              </span>
            </motion.h1>

            {/* 🎬 Titre typewriter en boucle — min-h fixe pour éviter le saut */}
            <motion.div variants={itemVariants} className="min-h-[2.5rem] flex items-center">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400"
                style={{ textShadow: '0 0 12px rgba(34,211,238,0.5)' }}
              >
                {typedTitle}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="inline-block ml-0.5 w-0.5 h-6 md:h-7 bg-cyan-400 align-middle"
                />
              </h2>
            </motion.div>

            {/* Description — directement après le titre, sans espace extra */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed"
            >
              Passionnée par la conception et le développement d’applications web et de plateformes numériques. Expérience dans des projets innovants, allant du site e-commerce aux applications de gestion, avec maîtrise de Java, Angular et Spring Boot. 
            </motion.p>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 text-gray-300 text-xs md:text-sm"
            >
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400 shrink-0" />
                Rabat, Maroc
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                fatimabenouakass19@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-cyan-400 shrink-0" />
                0637145728
              </span>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="/CV_Fatima_BEN_OUAKASS.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
            >
              Voir mon CV
            </motion.a>

            {/* Icônes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-3 pt-1"
            >
              <motion.a
                href="https://github.com/FatimaBenSoftEng"
                aria-label="GitHub"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-3 rounded-full bg-slate-800/80 border border-slate-700 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fatima-ben-ouakass-77998724b"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-3 rounded-full bg-slate-800/80 border border-slate-700 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:fatimabenouakass19@gmail.com"
                aria-label="Email"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-3 rounded-full bg-slate-800/80 border border-slate-700 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Colonne droite : photo + badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end items-center py-12 lg:py-0"
          >
            {/* Anneaux décoratifs rotatifs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[340px] h-[340px] md:w-[410px] md:h-[410px] lg:w-[450px] lg:h-[450px] rounded-full border border-purple-500/20 border-dashed pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[365px] h-[365px] md:w-[435px] md:h-[435px] lg:w-[475px] lg:h-[475px] rounded-full border border-fuchsia-400/10 pointer-events-none"
            />

            {/* 🖼️ Cercle photo — hover : scale + glow intense + overlay brillant */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(168,85,247,0.4), 0 0 60px rgba(236,72,153,0.2)',
                  '0 0 50px rgba(168,85,247,0.7), 0 0 90px rgba(236,72,153,0.4)',
                  '0 0 30px rgba(168,85,247,0.4), 0 0 60px rgba(236,72,153,0.2)',
                ],
              }}
              whileHover={{
                scale: 1.07,
                boxShadow: '0 0 70px rgba(168,85,247,0.9), 0 0 120px rgba(236,72,153,0.6)',
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full p-1 bg-gradient-to-br from-purple-400 via-fuchsia-400 to-pink-200 cursor-pointer group"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/Fatima.jpeg"
                  alt="Fatima"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay brillant au hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/0 via-white/0 to-fuchsia-400/0 group-hover:from-purple-500/10 group-hover:via-white/10 group-hover:to-fuchsia-400/10 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Badge "Java & Spring Boot" */}
            
            
          </motion.div>
        </div>

        {/* Flèche scroll */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60 cursor-pointer hover:text-white/90 transition-colors"
            onClick={() => scrollTo('apropos')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero