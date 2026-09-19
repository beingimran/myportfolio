import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohammad Imran | Software Engineer</title>
        <meta name="description" content="I’m a full-stack software developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <main id="main-content">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    </div>
  )
}
