import React ,{useState}from 'react'
import {Form,Input,Button, notification} from 'antd'
import styles from './signup.module.css'
import {auth} from '../../utils/firebase'


function Signup() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[confirmpassword,setConfirmpassword]=useState("");
    const[loading,setLoading]=useState(false);
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
       } catch (error) {

           notification.error({
               message:error?.message
           })
           
       }
       setLoading(false)
   }
    return (
        <div className={styles.formWrapper}>
            <img src="/logo.png"
            className={styles.logo}/>

            
                <Form layout="vertical"
                onFinish={formHandler}
                >

                <Form.Item label="Firstname"
                name='firstname'
                rules={[{
                    required:true,
                    message:'first name is required'




                }]}
                 >
                    <Input type="Firstname"
                   
                    size="large"
                    onChange={(e)=>setFirstname(e.target.value)}
                    value={firstname}
                    placeholder="enter your first name"
                     /> 
                      </Form.Item>
                 
                    <Form.Item label="Lastname"
                    name='lastname'
                         rules={[{
                             required:true,
                             message:'last name is required'
                         }]}
                         >
                        <Input type="Lastname"
                        size="large"
                        onChange={(e)=>setLastname(e.target.value)}
                        value={lastname}
                        placeholder="enter your last name"
                        
                        />

                    </Form.Item>
                <Form.Item label="Email address"
                name='emailaddress'
                rules={[{
                    required:true,
                    message:'your email adresss is required'
                }]}
                >
                    <Input type="email"
                    size="large"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="enter your email address"
                    />
    

                </Form.Item>

                <Form.Item label="Password"
                name='password'
                  rules={[{
                      required:true,
                      message:'password is required'
                      
                  }]}
                >
                   <Input.Password
                   size="large"
                   onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  placeholder="enter your password"
                   />
                    
                </Form.Item>

                <Form.Item label="Confirm Password"
                name='Confirm'
                
        
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
                
                >
                    <Input.Password
                    size="large"
                    onChange={(e)=>setConfirmpassword(e.target.value)}
                    value={confirmpassword}
                    placeholder="please confirm your password"
                    
                    />

                </Form.Item>

                
                <Form.Item >
                <Button type="primary" htmlType="submit" loading={loading} >
                    Sign Up
                </Button>
                </Form.Item >

                
            </Form>
        </div>
    )
}

export default Signup
