import {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image';


const name = 'Northammer';
const profilePicStatic = {
    width: 750,
    height: 275
}
const profilePicOnScroll= {
    width: 250,
    height: 100
}
let profilePic = profilePicStatic


export default function Header(props){
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
  
    useEffect(() => {
      function onScroll() {
        let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
        if (currentPosition > scrollTop) {
          console.log('Scrolling Down')
          profilePic = profilePicOnScroll
          setScrolling(false);
        } else {
          console.log('Scrolling Up')
          setScrolling(true);
        }
        if(currentPosition === 0){
            profilePic = profilePicStatic
        }
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
  
    return(
<header className={styles.header}>
                {props.home ? (
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
    )}