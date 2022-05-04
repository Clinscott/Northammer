import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import VideoPlayer from "../../components/VideoPlayer";

export default function FortyK() {
  return (
    <Layout>
      <Head>
        <title>40k</title>
      </Head>
      <h1 className={utilStyles.headingXl}>40k</h1>
      <VideoPlayer
        title="The Best Terrain Guide"
        src="https://www.youtube.com/watch?v=lTVSTduzf-M"
      />
    </Layout>
  );
}
