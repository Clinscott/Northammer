import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Button from './button';

const name = 'Northammer';
export const siteTitle = 'Northammer - Home';
const profilePic = {
    width: 250,
    height: 100
}

export default function Layout({children, home}){
    return(
        <div>
            <Head>
                <link rel='icon' href="/northammerIcon.ico" />
                <meta 
                    name='description'
                    content='The place for engaging and informative Warhammer content.'
                    />
                <meta property='og:title' content={siteTitle}/>
                <meta name='twitter:card' content='summary_large_image'/>
            </Head>
            <div className={styles.fixed}>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image 
                            priority
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={profilePic.height}
                            width={profilePic.width}
                            alt={name}
                        />
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.png"
                                    className={utilStyles.borderCircle}
                                    height={profilePic.height}
                                    width={profilePic.width}
                                    alt={name}
                                    />
                            </a>
                        </Link>
                        
                    </>
                )}
            </header>
            <div className={styles.fixed}>
                <div className= {styles.line}>
                    <Button title='40k' link="/posts/40k"></Button>
                    <Button title='Fantasy' link="/posts/fantasy"></Button>
                    <Button title='Cool Gentleman' link="/posts/coolGentleman"></Button>
                    <Button title='The Founders' link="/posts/theFounders"></Button>
                </div>
            </div>
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
    )
}