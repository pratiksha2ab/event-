import React,{useState} from 'react'
import {Button,Form,Input } from 'antd';
import styles from './contact-us.module.css';
import {auth} from '../../utils/firebase';
import {useRouter} from 'next/router';

function ContactUs() {
    const[email,setEmail]=useState("");
    const[fullname,setFullname]=useState("");
    const[message,setMessage]=useState("");
    const[loading,setLoading]=useState(false);
    const router=useRouter();
    const formHandler=async()=>{
        setLoading(true)
        try {
            await auth.createUserWithEmailAndPassword(email,password)
            const User=auth.currentUser
            User.sendEmailVerification({
                url:'http://localhost:3000'
            })
            notification.success({
                message:'User created sucessfully',
                description:'verification mail have been sent'
            })
            router.push("/")
        } catch (error) {
 
            notification.error({
                message:error?.message
            })
            
        }
        setLoading(false)
    }
    return (
        <div className={styles.ContactUs}
        
        >
            <h2 className={styles.contact}>Contact Us</h2>
            
        <Form layout="vertical" >
      <Form.Item label={"Email"}
        name='email'
        rules={[{
            required:true,
            message:"Enter your email"
        }]}
        
        
        >
            <Input size="large"  onChange={(e)=>setEmail(e.target.value)} value={email}type="email" />

        </Form.Item>
        <Form.Item label={ "Fullname"}
        name='fullname'
         rules={[{
            required:true,
            message:"Enter your fullname"
        }]}>
            <Input size="large" onChange={(e)=>setFullname(e.target.value)} value={fullname} type="fullname" />

        </Form.Item>
        
        <Form.Item label={ "Message"}
        name='message'
         rules={[{
            required:true,
            message:"Enter your message"
        }]}>
            <Input.TextArea rows={3} size="large" onChange={(e)=>setMessage(e.target.value)} value={message} type="textarea" />

        </Form.Item>
        
        <Form.Item>
                <Button  size="large" htmlType="submit"  type="dashed" loading={loading}>
                     Submit
                </Button>
            </Form.Item>
        </Form>
        
    </div> 
    )
}

export default ContactUs
