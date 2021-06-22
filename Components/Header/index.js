import React, {useContext } from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import { Avatar, Menu, Dropdown,Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {MyContext} from '../../utils/authcontext';
import {firebase} from '../../utils/firebase';





function Header() {
    // const user = firebase.auth().currentUser;
    const {user,setUser}=useContext(MyContext);
    const logoutHandler=()=>{
     firebase.auth().signOut()
     setUser(null)
    //  window.location.reload()


    }

    const menu = (

        <Menu>
            <Menu.Item key={1}>
                <a href="/change-password" > Change Password</a>

            </Menu.Item >
            <Menu.Item key={2}>
                <a href="/change-email">Change Email</a>
            </Menu.Item>
            <Menu.Item>
                <p onClick={logoutHandler}>Logout</p>
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
                    <Link href="/submit-event"><a>Submit Event</a></Link>
                    
                    {

                        user ?
                            <Dropdown overlay={menu} trigger={["click"]}>
                                 <Avatar icon={<UserOutlined />} /> 
                            </Dropdown> : <Link href="/login"><a>Login</a></Link>
                    } 

                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Header


