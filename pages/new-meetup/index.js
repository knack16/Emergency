import NewMeetupForm from '../../component/meetups/NewMeetupForm'

function NewMeetupPage(){
    async function addMeetupHandler(enteredMeetupData){
        const response= await fetch('/api/new-meetup',{
           method:'POST',
           body:JSON.stringify(enteredMeetupData),
           headers:{
               'Content-Type':'application/json'
           }
        });
        const data= await response.json();
    }
    return<NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
export default NewMeetupPage;