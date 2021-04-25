  import React,{useEffect} from 'react'
  import styles from './Home.module.css'
  import Link from 'next/link'
  import ImageSlider from '../Components/carousel'
  import {auth} from '../utils/firebase';
  import Eventcard from '../Components/Card';
  import {Avatar,Menu,Dropdown} from 'antd';
  import { UserOutlined } from '@ant-design/icons';
  
  
  
  
  
  function Homepage() {
    const menu=(
      
        <Menu>
            <Menu.Item key={1}>
                <Link href="/change-password" > <a>Change Password</a></Link>
  
                
            </Menu.Item >
            <Menu.Item key={2}>
                <Link href="/change-email"> <a>Change email</a></Link>
            </Menu.Item>
  
        </Menu>
    )
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
              { 
              
                  user?
                  <Dropdown overlay={menu} trigger={["click"]}>
                     <a> <Avatar icon= {<UserOutlined/>}/> </a>
                      </Dropdown> :<Link href="/login"><a>Login</a></Link>
              }
              
             </div>
          </div>
          <ImageSlider/>
          <Eventcard/>
          </React.Fragment>
      )
  }
  
  export default Homepage
  

