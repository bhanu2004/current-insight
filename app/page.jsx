import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import Featured from '@/components/featured/page';
import CategoryList from '@/components/CategoryList/page';
import styles from "./homepage.module.css"
import CardList from '@/components/cardList/page';
import Menu from '@/components/Menu/page';
export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;


  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page = {page}/>
        <Menu />
      </div>
    </div>
  );
}
