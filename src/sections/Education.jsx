import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { GraduationCap, Award, Globe, BookOpen, Eye, Calendar, MapPin, X } from 'lucide-react'

const education = [
  {
    degree: "Diplôme d'Ingénieure d'État en Système d'Information et Transformation Digitale",
    school: 'Université Privée de Fès – Campus Rabat',
    period: '2020 - 2025',
    location: 'Rabat, Maroc',
    mention: 'Mention Très Bien',
    description:
      "Formation d'excellence en ingénierie des systèmes d'information avec spécialisation en transformation digitale et développement Full Stack.",
    courses: [
      "Conception et architecture des systèmes d'information",
      'Développement Full Stack (Angular, Spring Boot)',
      'Bases de données et Big Data',
      'Gestion de projets informatiques',
      "Développement d'applications web et mobiles",
    ],
    icon: GraduationCap,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    degree: 'Baccalauréat en Sciences Mathématiques A',
    school: 'Lycée Mohamed VI',
    period: '2019 - 2020',
    location: 'Tinghir, Maroc',
    mention: 'Mention Assez Bien',
    description: 'Formation scientifique avec spécialisation en mathématiques.',
    courses: [
      'Mathématiques avancées',
      'Sciences physiques',
      'Informatique',
    ],
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-500',
  },
]

const certifications = [
  { name: 'Développement Full-Stack', issuer: 'Simplilearn', year: '2026', url: 'certificat_FullStack.pdf' },
  { name: 'Fundamentals of DevOps on AWS', issuer: 'Simplilearn', year: '2026', url: 'Certificat_DevOps.pdf' },
  { name: 'Gérez du code avec Git et GitHub', issuer: 'OpenClassrooms', year: '2025', url: 'certificat_Git_Hub.pdf' },
  { name: 'Angular', issuer: 'OpenClassrooms', year: '2025', url: 'Certificat_Angular.pdf' },
  { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', year: '2025', url: 'certificat_Scum.pdf' },
  { name: 'React', issuer: 'OpenClassrooms', year: '2025', url: 'Certificat_React.pdf' },
  { name: 'Programmation JAVA', issuer: 'OpenClassrooms', year: '2024', url: 'Certificat_Java.pdf' },
  { name: "Évaluez les performances d'un modèle de Machine Learning", issuer: 'OpenClassrooms', year: '2025', url: 'Certificat_ML.pdf' },
  { name: 'Intelligence Artificielle HCIA', issuer: 'Huawei', year: '2022', url: 'certificatIA.jfif' },
  { name: 'Git Fundamentals', issuer: 'Alison', year: '2025', url: 'certificat_Git.jfif' },
  { name: 'Programmation Python', issuer: 'OpenClassrooms', year: '2021', url: 'CertificatPython.pdf' },
]

const languages = [
  { name: 'Amazigh', level: 'Langue maternelle', isText: true },
  { name: 'Arabe', level: 'Langue maternelle'},
  { name: 'Français', level: 'Courant'},
  { name: 'Anglais', level: 'Intermédiaire'},
]

// ✅ Détecte si le fichier est une image (jfif, jpg, png, webp)
const isImage = (url) => /\.(jfif|jpg|jpeg|png|webp|gif)$/i.test(url)

// ✅ Modal certificat — PDF ou image, sans scroll parasite
const CertModal = ({ cert, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Contenu modal */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl flex flex-col"
          style={{ maxHeight: '90vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-slate-800/90 border border-white/10 rounded-t-xl shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">{cert.name}</h3>
                <p className="text-gray-400 text-xs">{cert.issuer} — {cert.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </motion.button>
            </div>
          </div>

          {/* Corps : image ou PDF */}
          <div className="rounded-b-xl overflow-hidden bg-white" style={{ height: '75vh' }}>
            {isImage(cert.url) ? (
              // ✅ Image : centrée, sans scroll
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <img
                  src={cert.url}
                  alt={cert.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              // ✅ PDF : FitH force le zoom pour correspondre à la largeur, pas de scroll horizontal
              <iframe
                src={`${cert.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-fit`}
                title={cert.name}
                className="w-full h-full"
                style={{ border: 'none', display: 'block' }}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Composant carte formation
const EducationCard = ({ edu, index }) => {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const Icon = edu.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass rounded-xl p-6 glow-effect flex flex-col"
    >
      <div className="mb-5">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>
      <div className="mb-3">
        <h4 className="text-lg font-bold text-white mb-2 leading-snug">{edu.degree}</h4>
        <p className="text-blue-400 font-semibold text-sm">{edu.school}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-400">
        <div className="flex items-center gap-1.5">
          <Calendar size={13} className="text-gray-500" />
          <span>{edu.period}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={13} className="text-gray-500" />
          <span>{edu.location}</span>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{edu.description}</p>
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
          🎓 {edu.mention}
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
          <BookOpen size={14} className="text-purple-400" />
          Points clés :
        </p>
        <div className="space-y-1.5">
          {edu.courses.map((course, courseIndex) => (
            <motion.div
              key={courseIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={cardInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + courseIndex * 0.08 }}
              className="flex items-start gap-2 text-sm text-gray-400"
            >
              <span className="text-purple-400 mt-1 shrink-0">▹</span>
              <span>{course}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ✅ Carte certification
const CertCard = ({ cert, index }) => {
  const [certRef, certInView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        ref={certRef}
        initial={{ opacity: 0, x: 50 }}
        animate={certInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        whileHover={{ scale: 1.02, x: -4 }}
        className="glass rounded-xl p-4 glow-effect relative"
      >
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.25, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          title="Voir le certificat"
          className="absolute top-3 right-3 p-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/30 hover:text-white transition-all"
        >
          <Eye size={16} />
        </motion.button>

        <div className="flex items-center gap-4 pr-10">
          <div className="p-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shrink-0">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-white text-sm mb-0.5">{cert.name}</h4>
            <p className="text-xs text-gray-400">{cert.issuer}</p>
          </div>
          <span className="text-xs text-cyan-400 font-semibold shrink-0 bg-cyan-400/10 px-2 py-1 rounded-full mr-8">
            {cert.year}
          </span>
        </div>
      </motion.div>

      {showModal && (
        <CertModal cert={cert} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="formation" ref={ref} className="min-h-screen py-20 px-4 md:px-6 lg:px-8 relative">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Formation & Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg">
            Parcours académique, certifications et compétences linguistiques
          </p>
        </motion.div>

        <div className="space-y-14">

          {/* 1. Formation */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              <span>Formation Académique</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <EducationCard key={index} edu={edu} index={index} />
              ))}
            </div>
          </div>

          {/* 2. Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-purple-400" />
              <span>Certifications</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <CertCard key={index} cert={cert} index={index} />
              ))}
            </div>
          </div>

          {/* 3. Langues */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Globe className="text-pink-400" />
              <span>Compétences Linguistiques</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-5 text-center glow-effect"
                >
                  <div className={`mb-2 ${lang.isText ? 'text-2xl font-bold' : 'text-4xl'}`}>{lang.flag}</div>
                  <h4 className="font-bold text-white mb-1">{lang.name}</h4>
                  <p className="text-xs text-gray-400">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education