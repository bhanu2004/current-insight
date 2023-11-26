"use client"

import Image from 'next/image';
import styles from './ThemeToggle.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';

const ThemeToggle = ()=>{

    const {theme,toggle} = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle} style={theme=='dark'?
        {backgroundColor: 'white'}: {backgroundColor:'#0f172a'}}>
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div className={styles.ball} style={theme=='dark'?
            {left:2,backgroundColor:'#0f172a',color:'white'}:
        {right:2,backgroundColor:'white',color:'white'}}></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    )
}

export default ThemeToggle;