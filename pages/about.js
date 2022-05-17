import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'
import { createClient } from 'contentful'

export default function about({ cv, about, programmingSkills, frameworksAndLibraries, databases }) {
  
  return (
    <Layout>
      <AboutMe cv={cv} about={about} programmingSkills={programmingSkills} frameworksAndLibraries={frameworksAndLibraries} databases={databases} />
    </Layout>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'curriculumVitae' })
  const about = await client.getEntries({ content_type: 'aboutme' })
  const programmingSkills = await client.getEntries({ content_type: 'programmingSkill' })
  const frameworksAndLibraries = await client.getEntries({ content_type: 'frameworksAndLibraries' })
  const databases = await client.getEntries({ content_type: 'database' })
  return {
    props: {
      cv: res.items,
      about: about.items,
      programmingSkills: programmingSkills.items,
      frameworksAndLibraries: frameworksAndLibraries.items,
      databases: databases.items,
    },
  }
}
