import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Button from "./button";
import Header from "./header";
export const siteTitle = "Northammer - Home";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/northammerIcon.ico" />
        <meta
          name="description"
          content="The place for engaging and informative Warhammer content."
        />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Header home={home} />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
