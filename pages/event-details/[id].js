import React from 'react'
import {useRouter} from 'next/router';


function EventDetails() {
    const router=useRouter()
    const {id}=router.query
    return (
        <div>
            This is event details page-{id}-comming soon....
        </div>
    )
}

export default EventDetails
