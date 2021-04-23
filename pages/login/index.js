import React, {useState} from 'react';
import {Form, Input,Button, notification } from 'antd';
import styles from './login.module.css';
import {auth} from '../../utils/firebase';
import {useRouter} from 'next/router'



function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setloading]=useState(false);
    const router=useRouter();
    const loginHandler=async()=>{
        setloading(true)
        try {
          await auth.signInWithEmailAndPassword(email,password)
          notification.success({
              message:'Logged in successfully',
              description:'Welcome '
              
          })
            router.push('/')
        } catch (error) {
            if (error?.message){
                notification.error({
                    message:error.message
                })
                
                
            }else
            {
                notification.error({
                    message:'Error occured',
                    description:'Something went wrong'
                })
            }
            
        }
        setloading(false)
        
    }
    return (
        <div className={ styles.formWrapper1}>
            <img src="/logo.png"
            className={styles.logo}/>
            <Form layout="vertical"
            onFinish={loginHandler}
            >
            
            <Form.Item
            label="Email address"
            name="emailaddress"
            rules={[{
                required:true,
                message:"Enter your email address"
            }]}
            
            >
                <Input type="Emailadress"
                size="large"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                
                />

            </Form.Item>

            <Form.Item label="Password"
            name="password"
            rules={[{
                required:true,
                message:"Enter your password"
            }]}
            >
                <Input type="password"
                size="large"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
            />

            </Form.Item>

            <Form.Item>
            <Button type="primary" htmlType="submit"
            loading={loading}
            >
             Login
             </Button>
            </Form.Item>
            </Form>

        </div>
    )
}

export default Login
