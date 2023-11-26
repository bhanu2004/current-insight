import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image className={styles.logoImg} src="/logo4.png" alt='lama blog' width={50} height={50} />
                    <h1 className={styles.logoText}>CurrentInsight</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eos rerum quae magnam laudantium, vel, 
                    suscipit dignissimos assumenda nostrum illum nemo ipsum ipsa ab, 
                    eius aliquam.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt='' width={18} height={23} />
                    <Image src="/instagram.png" alt='' width={18} height={23} />
                    <Image src="/tiktok.png" alt='' width={18} height={23} />
                    <Image src="/youtube.png" alt='' width={18} height={23} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">HomePage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;