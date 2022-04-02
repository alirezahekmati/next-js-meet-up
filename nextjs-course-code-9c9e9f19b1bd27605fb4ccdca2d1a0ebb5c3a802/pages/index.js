import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"
import Head from 'next/head'

function Index(props) {
    return (
        <div>
<>
<Head>
    <title>React meetup</title>
    <meta name="description" content="find your meet up in here"/>
</Head>
            <MeetupList meetups={props.meetups} />

</>


        </div>
    )
}
// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     return {
//         props: {
//             meetups: {
//                 meetupList
//             }
//         }
//     }

// }
export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://alireza:cIcuTcizbI5rZoTq@cluster0.pa75q.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find().toArray();
    client.close()
    return {
        props: {
            meetups: meetups.map(e =>

            ({
                id: e._id.toString(),
                image: e.image,
                title: e.title,
                address: e.address
            })
            )
        },
        revalidate: 10
    }

}
export default Index