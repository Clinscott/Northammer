import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function CoolGentleman() {
  return (
    <Layout>
      <Head>
        <title>Cool Gentleman</title>
      </Head>
      <h1 className={utilStyles.headingXl}>Cool Gentleman</h1>
    </Layout>
  );
}
