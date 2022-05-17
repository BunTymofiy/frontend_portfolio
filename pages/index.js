import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import FavouriteProjects from '../components/FavouriteProjects'
import LatestCode from '../components/LatestCode'
import Hero from '../components/Hero'
import getLatestRepos from '../lib/getLatestRepos'
import userData from '../constants/data'
import { createClient } from 'contentful'

export default function Home({ repositories, avatarImage }) {
  return (
    <Layout>
      <Hero avatarImage={avatarImage} />
      {/* <FavouriteProjects /> */}
      <LatestCode repositories={repositories} />
    </Layout>
  )
}
export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN
  const repositories = await getLatestRepos(userData, token)
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'avatarImage' })
  return {
    props: {
      repositories,
      avatarImage: res.items,
    },
  }
}

// export async function getStaticProps() {
//   return {
//     props: {
//       avatarImage: res.items,
//     },
//   }
// }
