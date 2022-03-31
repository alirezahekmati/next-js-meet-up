import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function Index() {
    function addMeetupHandeler(enteredMeetupData) {
        console.log(enteredMeetupData)

    }
    return (
        <div>
         
                <NewMeetupForm onAddMeetup={addMeetupHandeler} />
         
        </div>
    )
}

export default Index