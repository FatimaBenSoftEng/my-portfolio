import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Target, Users, Lightbulb } from 'lucide-react'

const stats = [
  { icon: Code, value: '10+', label: 'Projets Réalisés', color: 'text-blue-400' },
  { icon: Target, value: '2+', label: "Années d'Expérience", color: 'text-purple-400' },
  { icon: Users, value: '12+', label: 'Technologies Maîtrisées', color: 'text-pink-400' },
  { icon: Lightbulb, value: '90K+', label: 'Lignes de Code', color: 'text-cyan-400' },
]

const values = [
  {
    title: 'Passionnée',
    description: 'Passionnée par le code et les nouvelles technologies',
    icon: '💻',
  },
  {
    title: 'Orientée Résultats',
    description: 'Focalisée sur la qualité, la performance et la satisfaction des besoins',
    icon: '🎯',
  },
  {
    title: "Esprit d’équipe",
    description: 'Excellente communication et collaboration dans des environnements dynamiques',
    icon: '🤝',
  },
  {
    title: 'Innovante',
    description: 'Toujours à la recherche de solutions créatives et efficaces',
    icon: '✨',
  },
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="apropos"
      ref={ref}
      className="min-h-screen py-20 px-4 md:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">À Propos de Moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Ingénieure Full Stack passionnée par la conception et le développement
              d'applications web et de plateformes numériques, diplômée d'un{' '}
              <span className="text-cyan-400 font-semibold">
                Diplôme d'Ingénieure d'État en Systèmes d'Information et Transformation Digitale
              </span>
              . Je maîtrise{' '}
              <span className="text-fuchsia-400 font-semibold">Java / Spring Boot</span> et{' '}
              <span className="text-fuchsia-400 font-semibold">Angular</span>,
              compétences que j'ai développées et renforcées à travers mes stages
              et mes projets innovants.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Spécialisée dans le{' '}
              <span className="text-cyan-400 font-semibold">
                développement d'applications web modernes
              </span>
              , j'ai acquis une solide expérience dans différents environnements —
              du conseil en transformation digitale au développement de plateformes
              panafricaines — en utilisant des technologies telles que Angular,
              Spring Boot, Laravel et PostgreSQL. Mon objectif est de transformer
              les besoins fonctionnels en solutions techniques évolutives,
              performantes et à forte valeur ajoutée.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-6 text-center glow-effect"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center glow-effect"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {value.title}
              </h3>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About