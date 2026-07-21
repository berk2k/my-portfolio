import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Writing from './sections/Writing'
import OpenSource from './sections/OpenSource'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <Navbar />

      <div className="site-wrapper">
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Education />
        <Writing />
      </div>

      <footer
        style={{
          padding: '40px 0',
          textAlign: 'center',
          fontSize: '13px',
          color: 'var(--muted)',
          letterSpacing: '0.04em',
        }}
      >
        <div className="site-wrapper">
          {'berk polat · '}
          <a
            href="https://www.linkedin.com/in/berk2k/"
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
      </footer>
    </ThemeProvider>
  )
}

export default App