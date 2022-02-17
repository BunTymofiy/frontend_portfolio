import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../constants/data";

export default function Home({ repositories }) {
  return (
    <Layout>
      <Hero />
      {/* <FavouriteProjects /> */}
      <LatestCode repositories={repositories} />
    </Layout>
  )
}
export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
