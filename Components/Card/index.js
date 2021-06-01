import React from 'react'
import { Card,Typography } from 'antd';
import style from './card.module.css';
import Image from 'next/image';
const {Paragraph}=Typography;
import {useRouter} from 'next/router';

function Eventcard() {
  const router=useRouter();
  const eventCardList=[
    {
      image:'design1.png',
      summary:`Online conferemnce provided by the Leo club of Baglung for the youths.The program is all about the training ,job oppertunities and many more.We will have respected Minister "xyz" and 3 guests.`,
      title:'Conference',
      id:1,

      
     
    },
    {
      image:'design2.png',
      summary:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      title:'Art competition',
      id:2,

      
     
    },
    {
      image:'Python3.png',
      summary:`Mediaholic Nepal Pvt. Ltd. presents a free workshop on Python in collaboration with Patan CS Community.
      Please fill up the form to get registered for this event
      Event Details:
      Date: June-1, 2021 (Tuesday) to June-10 , 2021 ( Thrusday)
      Platform: Zoom (joining link will be sent to registered mail)`,
      title:'Bootcamp',
      id:3,

      
     
    },
    {
      image:'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
      summary:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      title:'Nature',
      id:4,

      
     
    },
    {
      image:'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
      summary:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      title:'Nature',
      id:4,

      
     
    },
    {
      image:'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
      summary:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      title:'Nature',
      id:4,

      
     
    },
    {
      image:'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
      summary:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      title:'Nature',
      id:4,

      
     
    },
    {
      image:'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
      summary:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
      title:'Nature',
      id:4,

      
     
    },
    
  ]
    return (
        <div className={style.cardWrapper}
        >
        
       { eventCardList.map((item,index)=>(<Card size="small" cover={<img src={item.image} width={300} height={300} 
    alt='Meditiation'
    onClick={()=>{router.push(`/event-details/${item.id}`)}}
    />
    }
    className={style.card}
    hoverable
     >
      <strong className={style.eventTitle}> {item.title}</strong>
      
      <Paragraph ellipsis={{rows:4,expandable:true,symbol:' more'}}> {item.summary}</Paragraph>
      
      
    </Card>))   }
     
    
        </div>
    
    )
}

export default Eventcard


