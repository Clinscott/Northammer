import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const profilePic = {
  width: 128,
  height: 128,
};

const founderImage = {
  width: 512,
  height: 512,
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.rowC2}>
        <Image
          priority
          src="/images/NH-CraigFull.gif"
          className={utilStyles.borderCircle}
          height={founderImage.height}
          width={founderImage.width}
          alt="Craig Linscott"
          styles={utilStyles.image}
        />
        <section className={utilStyles.headingMd}>
          <h4>
            We are Northammer!
            <br /> Together we look to provide exciting, engaging and
            informative Warhammer content.
          </h4>
        </section>
        <Image
          priority
          src="/images/NH-BradFull.gif"
          className={utilStyles.borderCircle}
          height={founderImage.height}
          width={founderImage.width}
          alt="Bradley Linscott"
          styles={utilStyles.image}
        />
      </div>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.blogArticle}`}
      >
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li className={utilStyles.listItem} key={id}>
              <div className={utilStyles.rowC}>
                <a className={utilStyles.imageF}>
                  <Image
                    src={
                      author === "Craig Linscott"
                        ? "/images/NH-Craig.gif"
                        : "/images/NH-Brad.gif"
                    }
                    width={profilePic.width}
                    height={profilePic.height}
                  />
                </a>
                <div>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />

                  <small className={utilStyles.lightText}>
                    <a className={utilStyles.lightText}>{author} </a>
                    <Date dateString={date} />
                  </small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
