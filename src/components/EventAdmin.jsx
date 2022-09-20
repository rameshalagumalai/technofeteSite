import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getEventRegistrations, getSpecificEvent, tConvert } from "./apiRequests/Requests";
import DetailCard from "./DetailCard";
import Loader from "./Loader";

export default function EventAdmin({ user }){

    const [event, setEvent] = useState({});
    const [registrations, setRegistrations] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function getEventDetails(){
            if(user === "No"){
                navigate("/set-up-profile");
                return;
            }
            setEvent(await getSpecificEvent(user.rollNumber));
            setRegistrations(await getEventRegistrations(user.rollNumber));
        }
        getEventDetails();
    }, [setEvent]);

    return (
        (event.name) ?
        <div className="page section">
            <h2>{`Hello ${user.name}`}</h2>
            <h4 className="f-700 mt-3 text-blue">{event.name}</h4>
            <div className="text-center mt-3">
                <h1 style={{fontSize: "5rem"}} className="f-700">{event.registeredCount}</h1>
                <h4 className="text-secondary">Total Registrations</h4>
            </div>
            <div className="row d-flex justify-content-center align-items-center mt-3">
                <DetailCard icon={"calendar"} detail={event.date} />
                <DetailCard icon={"location-dot"} detail={event.venue} />
                <DetailCard icon={"clock"} detail={tConvert(event.start_time.substring(0, 5))} />
                <DetailCard icon={"trophy"} detail={event.prize > 0 ? "₹"+event.prize : "No prize"} />
                <DetailCard icon={"user"} detail={event.organizer} />
                <DetailCard icon={"phone"} detail={event.phone} />
            </div>
            <h4 className="f-700 mt-5">Registrations</h4>
            {(registrations.length !== 0)?
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Roll No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registrations.map((registration, i) => {
                                return (
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{registration.name}</td>
                                        <td>{registration.rollNumber}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>:
                <h5 className="text-center">No registraions yet</h5>
            }
        </div>
        :
        <Loader />
    )
}