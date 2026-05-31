import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false)
    }, 1100)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <>
      {isLoading && <Loader />}

      <main
        className={`min-h-screen bg-[#fbfaf8] text-zinc-950 transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Header />
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </>
  )
}

export default App