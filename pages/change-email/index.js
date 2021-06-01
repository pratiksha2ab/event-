import {Button,Form,Input ,Notification, notification} from 'antd';
import styles from './change-email.module.css';
import React, { useState } from 'react';
import {firebase} from '../../utils/firebase';
import { useRouter } from 'next/router';

function ChangeEmail() {
    const[newemail,setnewEmail]=useState("");
    const[password,setpassword]=useState("");
    const[loading,setLoading]=useState(false);
    const user=firebase.auth().currentUser
    const router=useRouter();
    const changeEmailHandler =async()=>{
        setLoading(true)
    try {
        const credential= firebase.auth.EmailAuthProvider.credential(user?.email,password)
         await user.reauthenticateWithCredential(credential)
         await user.updateEmail(newemail)
         notification.success({
            message:'Success',
            description:'Email changed successfully'
            
        })
        router.push("/")
    } 

    catch (error) {
        console.log(error)
        notification.error({
            message:'Error occured',
            description:error?.message
        })
    }
    setLoading(false)
}
    return (
        <div className={styles.ChangeEmail}>
            
        <Form layout="vertical"onFinish={changeEmailHandler} >
      <Form.Item label={"New Email"}
        name='newemail'
        rules={[{
            required:true,
            message:"Enter your new email"
        }]}
        
        
        >
            <Input size="large"  onChange={(e)=>setnewEmail(e.target.value)} value={newemail}type="email" placeholder="enter your new email"/>

        </Form.Item>
        <Form.Item label={ "Password"}
        name='password'
         rules={[{
            required:true,
            message:"Enter your password"
        }]}>
            <Input.Password size="large" onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="enter your password"/>

        </Form.Item>
        
        <Form.Item>
                <Button  size="large" htmlType="submit"  type="primary" loading={loading}>
                     Change Email
                </Button>
            </Form.Item>
        </Form>
        
    </div> 
    )
}

export default ChangeEmail
