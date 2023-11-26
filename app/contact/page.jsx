"use client"

import React, { useState } from 'react'
import styles from './contactPage.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function page() {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async()=>{
    if(!name || !email || !message){
      alert("fill all fields");
    }
    else{
      const res = await fetch("/api/messages",{
        method:"POST",
        body: JSON.stringify({
            name,
            email,
            message
        })
    });
    alert(".. submitted");
    setEmail('');
    setName('');
    setMessage('');
    }
    // console.log("submitting...")
    
    // router.push('/');
}

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.messageContainer}>
        <div className={styles.leftPanel}>
          <input className={styles.input} type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='NAME' />
          <input className={styles.input} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="" placeholder='EMAIL'/>
          <textarea className={styles.inputMessage} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='MESSAGE' name="message" id="" cols="30" rows="9" />
          <button className={styles.submitBtn} onClick={handleSubmit}>SUBMIT</button>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.contactDetails}>
            <p className={styles.info}><FaLocationDot />Mohali, Punjab</p>
            <p className={styles.info}><IoCall />(+91) 776 190 0767</p>
            <p className={styles.info}><IoMail />bhanuprksh05@gmail.com</p>
            <div className={styles.socialLinks}>
              <div><FaGithub /> </div>
              <div><FaTwitter /> </div>
              <div><FaLinkedin /></div>
              <div><FaInstagram /></div>
            </div>
            <p className={styles.info}>© All rights are researved</p>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default page