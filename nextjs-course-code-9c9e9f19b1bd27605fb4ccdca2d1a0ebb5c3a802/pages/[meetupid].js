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
export function getStaticPaths() {

    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupid: "m1"
                },
                params: {
                    meetupid: "m2"
                }
            }
        ]
    }
}
export function getStaticProps(context) {
    const meetupid = context.params.meetupid
    return {
        props: {
            meetupDate: {
                id: meetupid,
                title: "meet up first",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
                address: "addres 1 ",
                description: "des 1 ",
            }
        }


    }
}
export default Meetupid