  import React,{useEffect} from 'react'
  import styles from './Home.module.css'
  import Link from 'next/link'
  import ImageSlider from '../Components/carousel'
  import {auth} from '../utils/firebase';
  import Eventcard from '../Components/Card';
  
  
  
  function Homepage() {
      const user=auth.currentUser
      
      useEffect(()=>{
          console.log(user?.email)},[user])
      return (
          <React.Fragment>
          <div className={styles.pinkdiv}>
             <img src="/logo.png" width="100px" height="50px"/>
             <div className={styles.greenDiv} >
              <Link href="/" ><a>Home</a></Link>
              <Link href="/events"><a>Event</a></Link>
              <Link href="/blog"><a>Blog</a></Link>
              <Link href="/"><a>Contact Us</a></Link>
              <Link href={user?'/':"/login"}><a>{user?'Welcome':'Login'}</a></Link>
             </div>
          </div>
          <ImageSlider/>
          <Eventcard/>
          </React.Fragment>
      )
  }
  
  export default Homepage
  

