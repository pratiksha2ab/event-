import {Button,Form,Input ,Notification, notification} from 'antd';
import styles from './change-password.module.css';
import React, { useState } from 'react';
import {firebase} from '../../utils/firebase';
import { useRouter } from 'next/router';

function ChangePassword() {
    const [oldpassword,setOldpassword]=useState('');
    const[newpassword,setNewpassword]=useState("");
    const[confirmnewpassword,setConfirmNewpassword]=useState("");
    const[loading,setLoading]=useState(false);
    const user=firebase.auth().currentUser
    const router=useRouter();
    const changePasswordHandler =async()=>{
        setLoading(true)
    try {
        const credential= firebase.auth.EmailAuthProvider.credential(user?.email,oldpassword)
         await user.reauthenticateWithCredential(credential)
         await user.updatePassword(newpassword)
         notification.success({
            message:'Success',
            description:'Password changed successfully'
            
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
        <div className={styles.ChangePassword}>
            
            <Form layout="vertical" onFinish={changePasswordHandler}>
            <Form.Item label={"Old Password"}
            name='oldpassword'
             rules={[{
                required:true,
                message:"Enter your old password"
            }]}>
                <Input.Password size="large" onChange={(e)=>setOldpassword(e.target.value)} value={oldpassword} type="password" placeholder="enter your old password"/>

            </Form.Item>
            <Form.Item label={"New Password"}
            name='newpassword'
            rules={[{
                required:true,
                message:"Enter your new password"
            }]}
            
            
            >
                <Input.Password size="large"  onChange={(e)=>setNewpassword(e.target.value)} value={newpassword}type="password" placeholder="enter your new password"/>

            </Form.Item>
            <Form.Item label={"Confirm New Password"}
            name='confirm newpassword'
            dependencies={['newpassword']}
            hasFeedback
            rules={[{
                required:true,
                message:"Confirm your new password"
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newpassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
        ]}
            >
                <Input.Password size="large" onChange={(e)=>setConfirmNewpassword(e.target.value)} value={confirmnewpassword} type="password" placeholder="re-enter your  password"/>

            </Form.Item>
            <Form.Item>
                    <Button  size="large" htmlType="submit"  type="primary" loading={loading}>
                         Change Password
                    </Button>
                </Form.Item>
            </Form>
            
        </div> 
    )
}

export default ChangePassword
