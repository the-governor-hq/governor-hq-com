import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import BodyPressPrivacy from './components/BodyPressPrivacy'
import ProjectPage from './components/ProjectPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/privacy/bodypress" element={<BodyPressPrivacy />} />
      </Routes>
    </div>
  )
}

export default App
