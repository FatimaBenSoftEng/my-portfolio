import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    title: 'Stagiaire Consultante en Transformation Digitale',
    company: 'Cabinet de conseil IT6',
    type: 'Stage',
    period: 'Septembre 2025 - Août 2026',
    location: 'Rabat, Maroc',
    color: 'from-purple-500 to-violet-600',
    description: [
      "Participation à la mise en œuvre et suivi de la feuille de route digitale de l'ONEE – Branche Eau",
      'Rédaction et mise à jour des livrables contractuels : comptes rendus de comités, tableaux de suivi',
      "Appui à l'analyse des besoins métiers et à la formalisation des exigences fonctionnelles",
    ],
    technologies: ['Transformation Digitale', 'Analyse fonctionnelle', 'Gestion de projet'],
  },
  {
    title: 'Stagiaire Développeuse Full-Stack (PFE)',
    company: 'Cabinet de conseil IT6',
    type: 'Stage PFE',
    period: 'Février - Juillet 2025',
    location: 'Rabat, Maroc',
    color: 'from-fuchsia-500 to-pink-600',
    description: [
      "Conception et développement d'une plateforme web panafricaine (Campus Afrique) centralisée pour la gestion des candidatures universitaires des étudiants africains",
      "Développement du back-end avec Java/Spring Boot et gestion de la base de données PostgreSQL",
      "Développement du front-end avec Angular et TypeScript pour des interfaces dynamiques, modulaires et responsives",
      "Mise en place d'un système d'authentification et de gestion des rôles (étudiant, responsable d'établissement, institution, administrateur fonctionnel)",
      "Développement d'un système de candidature multi-établissements (jusqu'à 5 choix) avec suivi en temps réel des dossiers et notifications automatiques",
      "Intégration de modules de services administratifs : demandes de bourse, visa, hébergement et transport",
      "Génération automatique d'attestations de préinscription et d'inscription avec tableau de bord dédié par acteur",
      "Réalisation d'un benchmark comparatif de 7 plateformes internationales (Campus France, DAAD, UCAS, etc.) et rédaction du cahier des charges",
      "Modélisation UML complète du système (4 diagrammes de cas d'utilisation, diagramme de classes, diagrammes de séquence) avec StarUML et maquettage interactif sur Figma",
    ],
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'Bootstrap', 'Figma', 'StarUML'],
  },
  {
    title: 'Stagiaire Développeuse Full-Stack',
    company: 'Agence Web et Digitale MJTECH Sarl',
    type: 'Stage',
    period: 'Juillet - Septembre 2024',
    location: 'Rabat, Maroc',
    color: 'from-blue-500 to-cyan-500',
    description: [
      "Conception et développement d'une plateforme e-commerce complète (Club des Professeurs Ressources) dédiée à la vente et au partage de ressources pédagogiques entre enseignants",
      "Développement du back-end avec PHP/Laravel en architecture MVC et gestion de la base de données MySQL",
      "Développement du front-end avec HTML, CSS, Bootstrap et JavaScript pour des interfaces responsives et intuitives",
      "Mise en place d'un système d'authentification et de gestion des rôles (visiteur, enseignant, administrateur)",
      "Intégration d'un module de paiement en ligne et de téléchargement automatique des fichiers après achat",
      "Développement du panneau d'administration : gestion des commandes, produits, catégories, vendeurs et utilisateurs",
      "Modélisation UML du système (cas d'utilisation, diagramme de classes, diagramme de séquence) avec StarUML",
      "Gestion des tâches et suivi de l'avancement via le tableau Kanban de l'outil interne Projet Tayssir",
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'StarUML'],
  },
  {
    title: 'Stagiaire Développeuse Full-Stack',
    company: "Bureau d'études IT-SYNERGIE",
    type: 'Stage',
    period: 'Juillet - Septembre 2023',
    location: 'Rabat, Maroc',
    color: 'from-teal-500 to-emerald-500',
    description: [
      "Analyse, conception et développement d'une application web de gestion de reprographie",
    ],
    technologies: ['Symfony 6', 'Bootstrap', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Stagiaire Support Technique IT',
    company: 'Concentrix Direction Technique',
    type: 'Stage',
    period: 'Juillet - Août 2022',
    location: 'Rabat, Maroc',
    color: 'from-orange-500 to-amber-500',
    description: [
      'Gestion des incidents informatiques et traitement des tickets techniques (pannes matérielles, dysfonctionnements, accès)',
      'Participation aux opérations quotidiennes de la direction technique',
    ],
    technologies: ['Support IT', 'Gestion des incidents'],
  },
]

const typeBadge = (type) => {
  if (type === 'Stage PFE') return 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
  if (type === 'CDI') return 'bg-green-500/20 text-green-300 border border-green-500/30'
  return 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
}

const techColors = [
  'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
  'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  'bg-violet-500/20 text-violet-300 border border-violet-500/30',
  'bg-pink-500/20 text-pink-300 border border-pink-500/30',
  'bg-teal-500/20 text-teal-300 border border-teal-500/30',
  'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
]

const ExperienceCard = ({ exp, index }) => {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={cardRef} className="relative flex gap-4">

      {/* Icône + ligne verticale */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={cardInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shrink-0 z-10`}
        >
          <Briefcase className="w-5 h-5 text-white" />
        </motion.div>

        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={cardInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ originY: 0 }}
            className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-white/20 to-transparent min-h-[40px]"
          />
        )}
      </div>

      {/* Carte */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={cardInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.01, y: -3 }}
        className="flex-1 glass rounded-2xl p-6 mb-4"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3 gap-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 leading-tight">{exp.title}</h3>
            <span className="font-semibold text-blue-400 text-sm">{exp.company}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${typeBadge(exp.type)}`}>
            {exp.type}
          </span>
        </div>

        {/* Date & lieu */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-gray-500" />
            <span>{exp.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gray-500" />
            <span>{exp.location}</span>
          </div>
        </div>

        {/* Réalisations */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 size={15} className="text-cyan-400" />
            <span className="text-sm font-semibold text-white">Réalisations clés :</span>
          </div>
          <ul className="space-y-2 pl-1">
            {exp.description.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                className="flex items-start gap-2 text-gray-300 text-sm"
              >
                <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <p className="text-xs font-semibold text-white mb-2">Technologies utilisées :</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIdx) => (
              <motion.span
                key={techIdx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + techIdx * 0.06 }}
                className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[techIdx % techColors.length]}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="experiences"
      ref={ref}
      className="min-h-screen py-20 px-4 md:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mon Expérience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg">
            Parcours professionnel et réalisations dans le développement et la transformation digitale
          </p>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience