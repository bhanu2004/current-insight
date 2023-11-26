import Image from 'next/image';
import styles from './featured.module.css';

const Featured = ()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Thoughts Unleashed!</b> Everyday Musings and Insights
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/featureImg2.jpg" alt='' fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Manali Travel Guide 2023 - The Zen Hippie Town of Himachal!</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel veniam suscipit quas facere nihil officiis deserunt consectetur,
                         libero dignissimos explicabo ad, quia est facilis. Aspernatur id magnam maxime dolorum eaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet officiis tenetur iste cum, 
                         omnis, expedita, numquam iusto aut totam praesentium ex culpa illo dolores! Quasi, dolorum. Cumque exercitationem perferendis molestiae!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>

            </div>
        </div>
    )
}

export default Featured;