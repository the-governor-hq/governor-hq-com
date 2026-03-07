import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  const featured = projects[0] // BodyPress
  const others = projects.slice(1)

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Open Source Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future of health tech with MIT-licensed tools
          </p>
        </motion.div>

        {/* Featured project — BodyPress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to={`/projects/${featured.slug}`}
            className="group relative block p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${featured.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="relative z-10 md:flex md:items-start md:gap-10">
              <div className="text-7xl mb-6 md:mb-0">{featured.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-bold">{featured.name}</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 font-medium">
                    Flagship
                  </span>
                </div>
                <p className="text-gray-400 mb-4 italic text-lg">{featured.tagline}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{featured.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative block p-8 h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4 italic">{project.tagline}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
