import Link from 'next/link';
import styles from './Menu.module.css';
import MenuPosts from '../menuPosts/page';
import MenuCategories from '../menuCategories/page';


const Menu = ()=>{
    return(
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1>Most Popular</h1>
            <MenuPosts />

            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1>Categories</h1>
            <MenuCategories />
            


            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1>Editors Pick</h1>
            <MenuPosts withImage={true} />
        </div>
    )
}

export default Menu;