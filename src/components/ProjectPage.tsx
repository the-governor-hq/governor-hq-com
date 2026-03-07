import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectBySlug } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-start gap-6 mb-6">
            <span className="text-6xl">{project.icon}</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className={`bg-gradient-to-r ${project.gradientText} bg-clip-text text-transparent`}>
                  {project.name}
                </span>
              </h1>
              <p className="text-xl text-gray-400 italic">{project.tagline}</p>
            </div>
          </div>

          {project.status && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </div>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {project.longDescription.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4" dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
              }} />
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Features</h2>
            <div className={`grid gap-4 ${project.slug === 'bodypress' || project.slug === 'hemolens' ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradientText} flex-shrink-0`} />
                  <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Highlights</h2>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-0.5">★</span>
                  <p className="text-gray-300 text-sm">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Limitations */}
        {project.limitations && project.limitations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="text-yellow-500">⚠️</span> Limitations
            </h2>
            <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 space-y-3">
              {project.limitations.map((limitation, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{limitation}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Disclaimer */}
        {project.disclaimer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="text-red-500">⚠️</span> Disclaimer
            </h2>
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <p className="text-gray-300 text-sm leading-relaxed">{project.disclaimer}</p>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
          {project.slug === 'bodypress' && (
            <Link
              to="/privacy/bodypress"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
            >
              Privacy Policy
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  )
}
