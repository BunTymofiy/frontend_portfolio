import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import { createClient } from 'contentful'

export default function experience({ experience }) {
  const [experienceData, setExperienceData] = useState([])
  function filter_data(data) {
    const today = new Date()
    if (data[0].fields.yearEnd === today.getFullYear()) {
      data[0].fields.yearEnd = 'Now'
    }
  }
  useEffect(() => {
    setExperienceData(filter_data(experience))
  }, [])

  return (
    <Layout title="Experience - Tymofiy Bun">
      <Experience experience={experience} />
    </Layout>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'experience' })
  return {
    props: {
      experience: res.items,
    },
  }
}
