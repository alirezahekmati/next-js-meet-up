import { useRouter } from 'next/router'
import { MongoClient, ObjectId } from 'mongodb'
import React from 'react'
import MeetupDetail from '../components/meetups/MeetupDetail'
import DynmicMeetup from '../components/DynmicMeetup'
import Head from 'next/head'
function Meetupid(props) {
    const { query: { meetupid } } = useRouter()
    return (
        <>
            <Head>
                <title>{props.meetupDate.title}</title>
                <meta name="description" content="create your meet up in here" />
            </Head>
            <DynmicMeetup>

                <MeetupDetail
                    {...props.meetupDate}
                />
            </DynmicMeetup>

        </>


    )
}
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://alireza:cIcuTcizbI5rZoTq@cluster0.pa75q.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.find({}, { _id: 1 }).toArray();



    client.close()
    return {
        fallback: false,
        paths: result.map(e => ({ params: { meetupid: e._id.toString() } }))

    }
}
export async function getStaticProps(context) {
    const meetupid = context.params.meetupid
    const client = await MongoClient.connect('mongodb+srv://alireza:cIcuTcizbI5rZoTq@cluster0.pa75q.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.findOne({ _id: ObjectId(meetupid) });


    let newobj = { ...result, _id: result._id.toString() }
    client.close()
    return {
        props: {
            meetupDate: newobj
        }


    }
}
export default Meetupid