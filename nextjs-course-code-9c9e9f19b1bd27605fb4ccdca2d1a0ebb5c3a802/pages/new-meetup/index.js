import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import {useRouter} from 'next/router'
function Index(props) {
    const router = useRouter()
    async function addMeetupHandeler(enteredMeetupData) {
        const respone = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const data = await respone.json()
        console.log(data)
        router.replace('/')
    }
    return (
        <div>

            <NewMeetupForm onAddMeetup={addMeetupHandeler} />

        </div>
    )
}

export default Index