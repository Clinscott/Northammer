import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function Fantasy(){
    return(
        <Layout>
            <Head>
                <title>Warhammer Fantasy Battles</title>
            </Head>
            <h1 className={utilStyles.headingXl}>Warhammer Fantasy Battles</h1>
        </Layout>
    )
}