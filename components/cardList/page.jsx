import { Card } from '../card/page';
import Pagination from '../pagination/page';
import styles from './CardList.module.css';

const getData = async (page,cat)=>{
    console.log(page,cat);
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,{
        cache: "no-store"
    })
    if(!res.ok){
        console.log(res);
        throw new Error("failed")
    }
    
    return res.json();
}

const CardList = async({page,cat})=>{
    const {posts,count} = await getData(page,cat);
    const POST_PER_PAGE = 2;
    const hasPrev = (page-1) > 0
    const hasNext = POST_PER_PAGE * page < count
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.posts}>
                <div className={styles.post}>
                    {posts?.map((item)=>{
                        return  <Card item={item} key={item._id}/>
                    })}
                   
                </div>
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>
    )
}

export default CardList;