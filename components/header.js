import {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image';
import Button from './button';


const name = 'Northammer';
const profilePicStatic = {
    width: 750,
    height: 275
}
const profilePicOnScroll= {
    width: 125,
    height: 50
}
let profilePic = profilePicStatic


export default function Header(props){
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
  
    useEffect(() => {
      function onScroll() {
        let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
        if (currentPosition > 600) {
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
                                    height={profilePic.height}
                                    width={profilePic.width}
                                    alt={name}
                                    />
                            </a>
                        </Link>
                        
                    </>
                )}
                <div className= {styles.line}>
                    <Button title='40k' link="/posts/40k"></Button>
                    <Button title='Fantasy' link="/posts/fantasy"></Button>
                    {/*<Button title='Cool Gentleman' link="/posts/coolGentleman"></Button>*/}
                    <Button title='The Founders' link="/posts/theFounders"></Button>
                </div>
                </header>
    )}