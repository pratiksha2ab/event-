import {Form,Input,Button} from 'antd';
import styles from './submit-event.module.css';
import React,{useState} from 'react';


function SubmitEvent() {
    const[eventtitle,setEventtitle]=useState('');
    const [eventtype,setEventtype]=useState('');
    const [venunename,setVenunename]=useState('');
    const [Address,setAddress]=useState('');
    const [eventsummary,setEventsumaary]=useState('');
    const [eventdetails,setEventdetails]=useState('');
    const [oraganizinationname,setOrganizationname]=useState('');
    const [oraganizinationdetails,setOrganizationdetails]=useState('');
    const [oraganizinationemail,setOrganizationemail]=useState('');
    const[loading,setloading]=useState(false);

    return (
        <div className={styles.submitEvent}>
            <Form layout="vertical">
            <Form.Item
            label="Event Title"
            name="eventtitle"
            rules={[{
                required:true,
                message:"Enter your event title"
            }]}
            
            >
                <Input type="EventTitle"
                size="large"
                onChange={(e)=>setEventtitle(e.target.value)}
                value={eventtitle}
                
                />
                </Form.Item>
                <Form.Item
            label="Event Type"
            name="eventtype"
            rules={[{
                required:true,
                message:"Enter the event type"
            }]}
            
            >
                <Input type="EventType"
                size="large"
                onChange={(e)=>setEventtype(e.target.value)}
                value={eventtype}
                
                />
                </Form.Item>
                <Form.Item
            label="Venune Name"
            name="venunename"
            rules={[{
                required:true,
                message:"Enter the venune name"
            }]}
            
            >
                <Input type="VenuneName"
                size="large"
                onChange={(e)=>setVenunename(e.target.value)}
                value={venunename}
                
                />
                </Form.Item>
                <Form.Item
            label="Address"
            name="address"
            rules={[{
                required:true,
                message:"Enter the address"
            }]}
            
            >
                <Input type="Address"
                size="large"
                onChange={(e)=>setAddress(e.target.value)}
                value={Address}
                
                />
                </Form.Item>
                <Form.Item
            label="Event Summary"
            name="eventsummary"
            rules={[{
                required:true,
                message:"Enter the event summary"
            }]}
            
            >
                <Input type="EventSummary"
                size="large"
                onChange={(e)=>setEventsumaary(e.target.value)}
                value={eventsummary}
                
                />
                </Form.Item>
                <Form.Item
            label="Event Details"
            name="eventdetails"
            rules={[{
                required:true,
                message:"Enter your event details"
            }]}
            
            >
                <Input type="EventDetails"
                size="large"
                onChange={(e)=>setEventdetails(e.target.value)}
                value={eventdetails}
                
                />
                </Form.Item>
                <Form.Item
            label="Organization Name"
            name="organizationname"
            rules={[{
                required:true,
                message:"Enter your organization name"
            }]}
            
            >
                <Input type="OrganizationName"
                size="large"
                onChange={(e)=>setOrganizationname(e.target.value)}
                value={oraganizinationname}
                
                />
                </Form.Item>
                <Form.Item
            label="Organization Email"
            name="organizationemail"
            rules={[{
                required:true,
                message:"Enter your organization email"
            }]}
            
            >
                <Input type="OrganizationEmail"
                size="large"
                onChange={(e)=>setOrganizationemail(e.target.value)}
                value={oraganizinationemail}
                
                />
                </Form.Item>
                <Form.Item>
            <Button type="primary" htmlType="submit"
            loading={loading}
            className={styles.buttonWrapper}
            >
             Submit
             </Button>
            </Form.Item>
            </Form>
            
        </div>
    )
}

export default SubmitEvent
