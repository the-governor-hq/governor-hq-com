import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Governor HQ</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building open-source tools for health data, wearable integrations, and AI safety.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Projects</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/the-governor-hq/bodypress" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  BodyPress
                </a>
              </li>
              <li>
                <a href="https://github.com/the-governor-hq/constitution" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Constitution
                </a>
              </li>
              <li>
                <a href="https://github.com/the-governor-hq/wearable-sdk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Wearable SDK
                </a>
              </li>
              <li>
                <a href="https://github.com/the-governor-hq/ambient-scan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Ambient Scan
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/the-governor-hq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/the-governor-hq/constitution/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Contributing
                </a>
              </li>
              <li>
                <a href="https://github.com/the-governor-hq/constitution/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  MIT License
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy/bodypress" className="text-gray-400 hover:text-white transition-colors">
                  BodyPress Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} The Governor HQ. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Built with</span>
            <span className="text-red-400">♥</span>
            <span className="text-sm text-gray-400">using React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
