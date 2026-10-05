import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  Code,
  Database,
  Cloud,
  Zap,
  Palette,
  Server,
  Shield,
  Layers,
  Terminal,
  Wrench,
  Monitor,
  GitBranch,
} from 'lucide-react'

const allSkills = [
  // Langages
  { name: 'Java', level: 90, category: 'Langages', color: 'from-orange-400 to-red-400' },
  { name: 'Python', level: 80, category: 'Langages', color: 'from-yellow-400 to-orange-400' },
  { name: 'TypeScript', level: 82, category: 'Langages', color: 'from-blue-400 to-cyan-400' },
  { name: 'PHP', level: 75, category: 'Langages', color: 'from-indigo-400 to-violet-400' },
  { name: 'JavaScript', level: 85, category: 'Langages', color: 'from-yellow-400 to-amber-400' },
  { name: 'C', level: 75, category: 'Langages', color: 'from-blue-400 to-indigo-400' },
  { name: 'C++', level: 75, category: 'Langages', color: 'from-indigo-400 to-purple-400' },
  { name: 'C#', level: 78, category: 'Langages', color: 'from-purple-400 to-fuchsia-400' },
  { name: 'Kotlin', level: 70, category: 'Langages', color: 'from-fuchsia-400 to-pink-400' },

  // Frontend
  { name: 'Angular', level: 85, category: 'Frontend', color: 'from-red-500 to-orange-400' },
  { name: 'React', level: 82, category: 'Frontend', color: 'from-cyan-400 to-blue-400' },
  { name: 'HTML5', level: 95, category: 'Frontend', color: 'from-orange-400 to-red-400' },
  { name: 'CSS3', level: 90, category: 'Frontend', color: 'from-blue-400 to-cyan-400' },
  { name: 'Bootstrap', level: 88, category: 'Frontend', color: 'from-purple-400 to-violet-400' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', color: 'from-teal-400 to-cyan-400' },


  // Backend
  { name: 'Spring Boot', level: 88, category: 'Backend', color: 'from-green-400 to-emerald-400' },
  { name: 'Laravel', level: 80, category: 'Backend', color: 'from-red-400 to-pink-400' },
  { name: 'Symfony 6', level: 78, category: 'Backend', color: 'from-slate-400 to-gray-300' },
  { name: 'ASP.NET', level: 75, category: 'Backend', color: 'from-purple-400 to-indigo-400' },

  // Bases de données
  { name: 'PostgreSQL', level: 85, category: 'Bases de données', color: 'from-blue-400 to-indigo-400' },
  { name: 'MySQL', level: 88, category: 'Bases de données', color: 'from-orange-400 to-yellow-400' },
  { name: 'MongoDB', level: 80, category: 'Bases de données', color: 'from-green-400 to-emerald-400' },
  { name: 'SQL', level: 90, category: 'Bases de données', color: 'from-cyan-400 to-blue-400' },
  { name: 'Oracle', level: 72, category: 'Bases de données', color: 'from-red-400 to-rose-400' },

  // Outils & DevOps
  { name: 'Git', level: 90, category: 'Outils', color: 'from-orange-400 to-red-400' },
  { name: 'GitHub', level: 90, category: 'Outils', color: 'from-slate-400 to-gray-300' },
  { name: 'Postman', level: 88, category: 'Outils', color: 'from-orange-500 to-amber-400' },
  { name: 'Figma', level: 82, category: 'Outils', color: 'from-pink-400 to-rose-400' },
  { name: 'Canva', level: 85, category: 'Outils', color: 'from-cyan-400 to-teal-400' },
  { name: 'Photoshop', level: 75, category: 'Outils', color: 'from-blue-500 to-indigo-400' },

  // Conception
  { name: 'UML', level: 85, category: 'Conception', color: 'from-violet-400 to-purple-400' },
  { name: 'MERISE', level: 82, category: 'Conception', color: 'from-fuchsia-400 to-violet-400' },

  // Systèmes
  { name: 'Windows', level: 95, category: 'Systèmes', color: 'from-blue-400 to-cyan-400' },
  { name: 'Linux', level: 80, category: 'Systèmes', color: 'from-yellow-400 to-orange-400' },
]

const filters = [
  { label: 'Tous', icon: Layers },
  { label: 'Langages', icon: Terminal },
  { label: 'Frontend', icon: Code },
  { label: 'Backend', icon: Server },
  { label: 'Bases de données', icon: Database },
  { label: 'Outils', icon: Wrench },
  { label: 'Conception', icon: Palette },
  { label: 'Systèmes', icon: Monitor },
]

const generalSkills = [
  { icon: Code, label: 'Ingénieure Full Stack', description: 'Du backend au frontend, une vision complète' },
  { icon: Zap, label: 'Performance', description: 'Code optimisé et scalable' },
  { icon: Palette, label: 'UI/UX', description: 'Interfaces modernes et intuitives' },
  { icon: Shield, label: 'Sécurité', description: 'Applications sécurisées' },
]

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filtered = activeFilter === 'Tous'
    ? allSkills
    : allSkills.filter((s) => s.category === activeFilter)

  return (
    <section
      id="competences"
      ref={ref}
      className="min-h-screen py-20 px-4 md:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mes Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Une expertise complète en développement avec des technologies modernes et performantes
          </p>
        </motion.div>

        {/* General Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {generalSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center glow-effect"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">{skill.label}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* 🔘 Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.label
            return (
              <motion.button
                key={filter.label}
                onClick={() => setActiveFilter(filter.label)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? 'bg-purple-500/80 border-purple-400 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <Icon size={15} />
                {filter.label}
              </motion.button>
            )
          })}
        </motion.div>

        {/* 📊 Grille des compétences */}
        <motion.div layout className="grid md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="glass rounded-xl px-6 py-5 glow-effect"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold text-base">{skill.name}</span>
                  <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-700/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.05, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills