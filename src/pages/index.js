/* eslint-disable import/no-named-as-default */
import * as React from 'react'

import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'
import SkillLogos from '../components/skills-logos'
import ClientWork from '../components/client-work'
import LearningProjects from '../components/learning-projects'
import About from '../components/about'
import Blog from '../components/blog'
import Contact from '../components/contact'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <SkillLogos />
      <ClientWork />
      <LearningProjects />
      <About />
      <Blog />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
