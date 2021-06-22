import React from 'react'
import {useRouter} from 'next/router';


function EventDetails() {
    const router=useRouter()
    const {id}=router.query
    return (
        <div >
            <img src="/YogaDetails.png" style={{width:'100%',height:'50vh'}} />
            <h2>About</h2>
            This is event details page-{id}-comming soon....
        </div>
    )
}

export default EventDetails
