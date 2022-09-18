import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getAttributeOfUser } from "./apiRequests/Requests";
import Loader from "./Loader.jsx";
import Organizer from "./Organizer";
import UserEventCard from "./UserEventCard";

export default function Profile() {

  const { user } = useAuth();
  const [result, setResult] = useState()

  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function getUserName(){
      if(user){
        setResult(await getAttributeOfUser(user, "name"));
        setEvents(await getAttributeOfUser(user, "events"));
      }
    }
    getUserName();
  }, [user]);

  if(result){
    if(result.isAdmin === 0){
      return (
        events ?
        <div className="section page">
          <h2>{`Hello ${result.name},`}</h2>
          <h4 className="text-secondary">Your events</h4>
          {events.length !== 0 ?
            <div className="row">
              {events.map((event, i) => {
                return <UserEventCard key={i} event={event} />
              })}
            </div>:
          <div style={{height: "60vh"}} className="d-flex align-items-center justify-content-center">
            <h2>No events registered</h2>
          </div>
          }
        </div>
        :
        <Loader />
      );
    }else{
      return (
        <Organizer user={result} />
      )
    }
  }else{
    return (
      <Loader />
    )
  }
}
