import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Eye, X, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Plateforme Web Campus Afrique',
    subtitle: 'Gestion des Candidatures Étudiantes Africaines',
    category: 'Full Stack',
    period: 'Fév — Août 2025',
    description:
      "Conception et développement d'une plateforme web panafricaine centralisée permettant aux étudiants africains de gérer leurs candidatures universitaires, demandes de bourse, visa, hébergement et transport — avec des interfaces dédiées à chaque acteur.",
    image: '/Campus.png',
    gradient: 'from-fuchsia-500/40 to-purple-600/40',
    technologies: ['Angular', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Bootstrap', 'Postman', 'Git'],
    features: [
      "Inscription, authentification et tableau de bord personnalisé étudiant",
      "Candidature multi-établissements (jusqu'à 5 choix) avec suivi en temps réel",
      "Formulaires intégrés : bourse, visa, hébergement et transport",
      "Interface établissement : validation/refus, génération d'attestations",
      "Interface institution (ambassade, ministère) : suivi académique et financier",
      "Interface administrateur : comptes, notifications et rapports (Excel/PDF)",
      "Conception UML (4 acteurs) + maquettage interactif Figma",
    ],
  },
  {
    id: 2,
    title: 'Site E-Commerce de Vente de Livres',
    subtitle: 'EBook Management System',
    category: 'Full Stack',
    period: 'Mars 2024',
    description:
      "Développement d'une plateforme e-commerce complète dédiée à la vente de livres numériques, avec deux interfaces distinctes : une pour les clients et une pour l'administrateur.",
    image: '/book.jpg',
    gradient: 'from-teal-500/40 to-blue-600/40',
    technologies: ['Java', 'JSP', 'Servlet', 'JDBC', 'MySQL', 'Maven', 'Bootstrap'],
    features: [
      "Authentification et gestion des comptes utilisateurs",
      "Catalogue de livres filtrable (Récents / Nouveaux / Anciens)",
      "Ajout au panier, gestion des commandes et paiement",
      "Interface admin : gestion complète des livres et commandes (CRUD)",
      "Base de données relationnelle avec tables livres et utilisateurs",
      "Conception UML : diagrammes de cas d'utilisation et de classes",
    ],
  },
   {
    id: 7,
    title: 'Club des Professeurs Ressources',
    subtitle: 'Application Web de Gestion des Ressources Pédagogiques',
    category: 'Full Stack',
    period: 'Année universitaire 2024-2025',
    description:
      "Conception et développement d'une plateforme web e-commerce dédiée aux enseignants, permettant l'achat, la vente et le partage de ressources pédagogiques (fiches, exercices PDF, jeux éducatifs), avec des interfaces distinctes pour les visiteurs, les enseignants et les administrateurs. Projet réalisé au sein de MJTECH Sarl, agence web et digitale basée à Rabat.",
    image: 'prof.jpg',
    gradient: 'from-emerald-500/40 to-lime-600/40',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'StarUML'],
    features: [
      "Catalogue de ressources pédagogiques filtrable par niveau scolaire, catégorie et prix",
      "Inscription, authentification et tableau de bord enseignant personnalisé",
      "Ajout au panier, gestion des favoris, paiement en ligne et téléchargement des fichiers après achat",
      "Formulaire de mise en vente de ressources par les enseignants (upload image + fichier ZIP)",
      "Interface administrateur : gestion des commandes, produits, catégories, vendeurs, utilisateurs et modes de paiement",
      "Système d'avis et commentaires clients",
      "Conception UML (3 acteurs : visiteur, enseignant, administrateur) + gestion de projet via tableau Kanban (Projet Tayssir)",
    ],
  },
  {
    id: 3,
    title: 'Site Web Touristique — Travel Tour',
    subtitle: 'Découverte du Maroc',
    category: 'Frontend',
    period: '2023 — 2024',
    description:
      "Développement d'un site web touristique dédié à la découverte du Maroc, offrant une expérience immersive avec des informations complètes sur les destinations, transports, hébergements, restaurants et activités.",
    image: '/Touriste.png',
    gradient: 'from-green-500/40 to-teal-600/40',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      "Page d'accueil avec destinations populaires et moteur de recherche",
      "Section Transport : modes de transport avec avis clients",
      "Section Hébergement : types d'hébergements par ville avec carte interactive",
      "Section Restauration : restaurants, menus, horaires et avis",
      "Section Activités : galerie photos et système d'avis",
      "Site responsive et multilingue — Modélisation MCD, DCC, GANTT",
    ],
  },
  {
    id: 4,
    title: 'Système de Gestion des Absences',
    subtitle: 'ISSI — Application Web Éducative',
    category: 'Full Stack',
    period: '2023 — 2024',
    description:
      "Application web complète pour automatiser la gestion des absences dans une institution éducative, avec 3 espaces utilisateurs : étudiant, enseignant et administration.",
    image: '/absence.jpg',
    gradient: 'from-pink-500/40 to-rose-600/40',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'StarUML'],
    features: [
      "Espace Étudiant : consultation de l'historique des absences par matière et date",
      "Espace Enseignant : marquage des présences/absences, statistiques d'assiduité",
      "Espace Administration : gestion CRUD des étudiants, rapports et tableaux de bord",
      "Base de données : 6 tables — Utilisateur, Enseignant, Étudiant, Module, Niveau, Absence",
      "Modélisation UML complète : cas d'utilisation, classes, séquences, Gantt",
    ],
  },
  {
    id: 5,
    title: 'Station Météorologique Arduino',
    subtitle: 'Système Embarqué de Mesure',
    category: 'IoT',
    period: 'Déc 2020 — Jan 2021',
    description:
      "Système embarqué de mesure météorologique collectant en temps réel la température, l'humidité et la pression atmosphérique, avec affichage sur écran LCD.",
    image: '/arduino2.jpg',
    gradient: 'from-cyan-500/40 to-sky-600/40',
    technologies: ['Arduino UNO', 'Langage C', 'DHT11', 'BMP180', 'LCD I2C', 'Proteus', 'Fritzing'],
    features: [
      "Mesure en temps réel : température (DHT11 + BMP180), humidité et pression barométrique",
      "Affichage des données météo sur écran LCD 16x2 avec rétroéclairage",
      "Programmation des pilotes pour chaque capteur en langage C",
      "Simulation du montage sur ISIS Proteus avant réalisation physique",
      "Câblage et schéma électrique réalisés avec Fritzing",
    ],
  },
  // {
  //   id: 6,
  //   title: 'Gestion des Employés',
  //   subtitle: 'Application Desktop Python',
  //   category: 'Desktop',
  //   period: null,
  //   description:
  //     "Application desktop de gestion des ressources humaines permettant de gérer les employés, leurs informations et leur suivi dans une base de données locale.",
  //   image: null,
  //   gradient: 'from-orange-500/40 to-amber-600/40',
  //   technologies: ['Python', 'SQLite'],
  //   features: [],
  // },
]

const categories = ['Tous', 'Full Stack', 'Frontend', 'IoT']

const techColors = [
  'bg-cyan-500 text-white',
  'bg-blue-500 text-white',
  'bg-violet-500 text-white',
  'bg-pink-500 text-white',
  'bg-teal-500 text-white',
  'bg-indigo-500 text-white',
  'bg-amber-500 text-white',
]

// ✅ Modal détails projet
const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-lg bg-slate-900/95 border border-white/10 rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image header */}
          <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">
                {project.id === 7 ? '📚' : '👥'}
              </div>
            )}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors z-10"
            >
              <X size={16} />
            </motion.button>
            {project.period && (
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/50 backdrop-blur-sm border border-white/20 text-gray-200 text-xs rounded-full">
                {project.period}
              </span>
            )}
          </div>

          {/* Contenu scrollable */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            {project.subtitle && (
              <p className="text-sm text-purple-400 font-medium mb-3">{project.subtitle}</p>
            )}
            <p className="text-gray-300 text-sm leading-relaxed mb-5">{project.description}</p>

            {project.features.length > 0 && (
              <div className="mb-5">
                <h4 className="text-white font-bold text-sm mb-3">Fonctionnalités clés :</h4>
                <ul className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-2">
              <h4 className="text-white font-bold text-sm mb-3">Technologies :</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[techIdx % techColors.length]}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bouton Fermer */}
          <div className="px-6 pb-5">
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Fermer
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const ProjectCard = ({ project, index, onOpenModal }) => {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl overflow-hidden flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — sans badges */}
      <div
        className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden cursor-pointer`}
        onClick={() => onOpenModal(project)}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {project.id === 7 ? '📚' : '👥'}
          </div>
        )}

        {/* Overlay eye */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: hovered ? 1 : 0.7, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm"
          >
            <Eye className="text-white w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-white mb-0.5 leading-tight">{project.title}</h3>
        {project.subtitle && (
          <p className="text-xs text-purple-400 font-medium mb-2">{project.subtitle}</p>
        )}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIdx) => (
            <span key={techIdx} className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${techColors[techIdx % techColors.length]}`}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer — seulement Voir détails, sans GitHub */}
        <div className="pt-2 border-t border-white/10">
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            Voir détails
            <ExternalLink size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projets" ref={ref} className="min-h-screen py-20 px-4 md:px-6 lg:px-8 relative">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mes Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg">
            Réalisations académiques et personnelles démontrant mon expertise technique
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects