import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="author" content={postData.author} />
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <article className={utilStyles.blogArticle}>
        <div className={utilStyles.lightText2}>
          <address class={postData.author}>
            <a rel="author" href="/posts/theFounders">
              {postData.author}
            </a>
          </address>
          <Date dateString={postData.date} />
        </div>
        <div
          className={utilStyles.blogArticleContent}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
