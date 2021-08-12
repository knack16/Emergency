import {Fragment} from 'react';
import MeetupDeatil from '../../component/meetups/MeetupDeatail';

function MeetupDeatils(){
    return(
        <MeetupDeatil 
            image='https://cdn.britannica.com/96/175196-050-EA0EF9D1/St-Peters-Basilica-Vatican-City.jpg' 
            title='The First Meetup' 
            address='Same Stret 5,Britanica' 
            description='The meet up description'
        />
    )
} 
export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                },
            }
        ]
    }
}

export async function getStaticProps(context){

    const meetupId= context.params.meetupId;

    return{
        props:{
            meetupData:{
                image:'https://cdn.britannica.com/96/175196-050-EA0EF9D1/St-Peters-Basilica-Vatican-City.jpg',
                id:'m1',
                title:'First Meetup',
                address:'Same Stret 5,Britanica',
                description:'The meet up description',
            }
        }
    }
}
         
export default MeetupDeatils;