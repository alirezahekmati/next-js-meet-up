import MeetupList from "../components/meetups/MeetupList"

const meetupList = [
    {
        id: "m1",
        title: "meet up first",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
        address: "addres 1 ",
        description: "des 1 ",
    },
    {
        id: "m2",
        title: "meet up second",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
        address: "addres 2 ",
        description: "des 2 ",
    }

]
function Index() {
    return (
        <div>
         
                <MeetupList meetups={meetupList} />

           
        </div>
    )
}

export default Index