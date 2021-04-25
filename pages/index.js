import React, { useEffect } from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import ImageSlider from '../Components/carousel'
import { firebase } from '../utils/firebase';
import Eventcard from '../Components/Card';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';





function Homepage() {
    const user = firebase.auth().currentUser;


    const menu = (

        <Menu>
            <Menu.Item key={1}>
                <a href="/change-password" > Change Password</a>

            </Menu.Item >
            <Menu.Item key={2}>
                <a href="/change-email">Change Email</a>
            </Menu.Item>

        </Menu>
    )
    
    return (
        <React.Fragment>
            <div className={styles.pinkdiv}>
                <img src="/logo.png" width="100px" height="50px" />
                <div className={styles.greenDiv} >
                    <Link href="/" ><a>Home</a></Link>
                    <Link href="/events"><a>Event</a></Link>
                    <Link href="/blog"><a>Blog</a></Link>
                    <Link href="/"><a>Contact Us</a></Link>
                    {

                        user ?
                            <Dropdown overlay={menu} trigger={["click"]}>
                                 <Avatar icon={<UserOutlined />} /> 
                            </Dropdown> : <Link href="/login"><a>Login</a></Link>
                    }

                </div>
            </div>
            <ImageSlider />
            <Eventcard />
        </React.Fragment>
    )
}

export default Homepage


