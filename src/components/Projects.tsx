import { motion } from 'framer-motion'

const projects = [
  {
    name: 'BodyPress',
    tagline: 'Your Body, Briefed Daily',
    description: 'AI-powered health insights from your wearable data. Get personalized daily briefings combining sleep, HRV, heart rate, weather, and environmental data.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/the-governor-hq/bodypress',
    gradient: 'from-pink-500/20 to-rose-500/20',
    icon: '❤️',
  },
  {
    name: 'Constitution',
    tagline: 'AI Safety Framework',
    description: 'Constraint-enforcement framework for AI-assisted development with health data. Enforces strict boundaries between wellness observations and clinical assertions.',
    tech: ['TypeScript', 'Runtime Validation', 'MCP'],
    github: 'https://github.com/the-governor-hq/constitution',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    icon: '⚖️',
  },
  {
    name: 'Wearable SDK',
    tagline: 'Ship Wearable OAuth in 15 Minutes',
    description: 'TypeScript-first SDK for connecting to Garmin, Fitbit, and more. Passport.js-like DX with Prisma-first storage and auto token refresh.',
    tech: ['TypeScript', 'OAuth 2.0', 'Prisma'],
    github: 'https://github.com/the-governor-hq/wearable-sdk',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    icon: '⌚',
  },
  {
    name: 'Ambient Scan',
    tagline: 'Environmental Data Scraper',
    description: 'Zero-dependency single-file server for normalized environmental data: temperature, air quality, UV index, humidity, wind, and geolocation.',
    tech: ['Node.js', 'Zero Dependencies', 'REST API'],
    github: 'https://github.com/the-governor-hq/ambient-scan',
    gradient: 'from-violet-500/20 to-purple-500/20',
    icon: '🌍',
  },
]

export default function Projects() {
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{project.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                
                {/* Tagline */}
                <p className="text-gray-400 mb-4 italic">{project.tagline}</p>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
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

                {/* Arrow indicator */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
