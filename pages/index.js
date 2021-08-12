
import MeetupList from '../component/meetups/MeetupList';

const DUMMY_MEETUPS=[
  {
    id:'m1',
    title:'the first meet up',
    image:'https://cdn.britannica.com/96/175196-050-EA0EF9D1/St-Peters-Basilica-Vatican-City.jpg',
    address:'britanica',
    description:'This is the first Meetup'
  },
  {
    id:'m1',
    title:'the first meet up',
    image:'https://cdn.britannica.com/96/175196-050-EA0EF9D1/St-Peters-Basilica-Vatican-City.jpg',
    address:'britanica',
    description:'This is the first Meetup'
  },
  {
    id:'m1',
    title:'the first meet up',
    image:'https://cdn.britannica.com/96/175196-050-EA0EF9D1/St-Peters-Basilica-Vatican-City.jpg',
    address:'britanica',
    description:'This is the first Meetup'
  },
];
function HomePage(props){
  return <MeetupList meetups={props.meetups}/>

}
export async function getStaticProps(){
  return{
    props:{
      meetups:DUMMY_MEETUPS
    }
  };
}
export default HomePage;