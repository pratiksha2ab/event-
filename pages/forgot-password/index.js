import { Button, Form, Input, notification } from 'antd'
import React, { useState } from 'react';
import {firebase} from '../../utils/firebase';

 const ForgotPassword = () => {
     const [email,setEmail]=useState('');
     const forgotPasswordHandler=async()=>{
          await firebase.auth().sendPasswordResetEmail(email);
          notification.success({message:"Reset Email Sent to",description:email})
     }
    return (
        <div style={{maxWidth:"600px",margin:"0 auto",marginTop:"50px"}}>
            <Form layout="vertical" onFinish={forgotPasswordHandler}>
                <Form.Item label={"Email Address"}>
                    <Input size="large" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter your email"/>
                   
                </Form.Item>
                <Form.Item>
                    <Button disabled={email?false:true} size="large" htmlType="submit"  type="primary">
                         Send Reset Email
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default ForgotPassword;