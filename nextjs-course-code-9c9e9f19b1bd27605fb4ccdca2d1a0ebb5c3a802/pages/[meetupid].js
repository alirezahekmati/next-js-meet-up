import { useRouter } from 'next/router'
import React from 'react'
import DynmicMeetup from '../components/DynmicMeetup'
function Meetupid() {
    const { query: { meetupid } } = useRouter()
    return (
        <div>
            <DynmicMeetup>
                <h1>the data id is this </h1>
                {meetupid}
            </DynmicMeetup>

        </div>
    )
}

export default Meetupid