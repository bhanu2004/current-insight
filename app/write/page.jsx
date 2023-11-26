"use client"

import Image from 'next/image'
import styles from './writePage.module.css'
import { useEffect, useMemo, useState } from 'react'
// import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/src/utils/firebase'
import dynamic from 'next/dynamic'


const storage = getStorage(app);

function WritePage() {
    const ReactQuill = useMemo(()=>dynamic(()=>import('react-quill'), {ssr:false}),[]);
    const[open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const {status} = useSession();
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [title, setTitle] = useState("");
    const [catValue, setCatValue] = useState("");
    const router = useRouter();

    useEffect(()=>{
        const upload = ()=>{
        console.log("upload calling inside..");
        const name = new Date().getTime + file.name
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {

        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
            setMedia(downloadURL);
            });
        }
        );
        };
        // console.log("upload calling outside..");
        file && upload();
    },[file])
    if(status==="loading"){
      return <div className={styles.loading}>Loading...</div>
    }
    if(status==="unauthenticated"){
      router.push("/")
    }
    const slugify = (str)=>{
        return str.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g,"")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    const handleSubmit = async()=>{
        console.log("submitting...")
        const res = await fetch("/api/posts",{
            method:"POST",
            body: JSON.stringify({
                title,
                desc:value,
                img:media,
                slug:slugify(title),
                catSlug: catValue
            })
        });
        router.push('/');
    }
  return (
    <div className={styles.container}>
        <input type="text" placeholder='Title' className={styles.input} onChange={e=>setTitle(e.target.value)}/>
        <select name="catSlug" className={styles.category} onChange={(e)=>setCatValue(e.target.value)}>
                <option >Category</option>
                <option value="fashion">Fashion</option>
                <option value="culture">Culture</option>
                <option value="coding">Coding</option>
                <option value="style">Style</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
            </select>
        <div className={styles.editor}>
            <button className={styles.button} onClick={()=>setOpen(!open)}>
                <Image src="/plus.png" alt='' width={16} height={16} />
            </button>
            {open && (
                <div className={styles.add}>
                    <input type="file" id="image" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}} />
                    <button className={styles.addButton}>
                        <label htmlFor='image'>
                            <Image src="/image.png" alt='' width={16} height={16} />
                        </label>
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/external.png" alt='' width={16} height={16} />
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/video.png" alt='' width={16} height={16} />
                    </button>
                </div>
            )}
            
            <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
        </div>
        <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  )
}

export default WritePage