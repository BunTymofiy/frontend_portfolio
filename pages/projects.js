import React from 'react'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import { createClient } from 'contentful'


export default function projects({projects}) {
  return (
    <Layout title="Projects - Tymofiy Bun">
      <Projects projects={projects}/>
    </Layout>
  )
}
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'Projects' })
  return {
    props: {
      projects: res.items,
    },
  }
}
