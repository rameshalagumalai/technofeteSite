import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import {
  getEventRegistrations,
  getSpecificEvent,
  tConvert,
} from "./apiRequests/Requests";
import DetailCard from "./DetailCard";
import Loader from "./Loader";

export default function EventAdmin({ admin }) {
  const [event, setEvent] = useState({});
  const [registrations, setRegistrations] = useState();

  const navigate = useNavigate();

  const { user, token } = useAuth();

  useEffect(() => {
    async function getEventDetails() {
      if (admin === "No") {
        navigate("/set-up-profile");
        return;
      }
      setEvent(await getSpecificEvent(admin.rollNumber));
      const reg = await getEventRegistrations(admin.rollNumber, {
        uid: user,
        token,
      });
      console.log(reg);
      if (reg) {
        setRegistrations(reg);
      } else {
        setRegistrations(null);
      }
    }
    getEventDetails();
  }, [setEvent, navigate, admin]);

  return event.name ? (
    <div className="page section">
      <h2>{`Hello ${admin.name}`}</h2>
      <h4 className="f-700 mt-3 text-blue">{event.name}</h4>
      <div className="text-center mt-3">
        <h1 style={{ fontSize: "5rem" }} className="f-700">
          {event.registeredCount}
        </h1>
        <h4 className="text-secondary">Total Registrations</h4>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-3">
        <DetailCard icon={"calendar"} detail={event.date} />
        <DetailCard icon={"location-dot"} detail={event.venue} />
        <DetailCard
          icon={"clock"}
          detail={tConvert(event.start_time.substring(0, 5))}
        />
        <DetailCard
          icon={"trophy"}
          detail={event.prize > 0 ? "₹" + event.prize : "No prize"}
        />
        <DetailCard icon={"user"} detail={event.organizer} />
        <DetailCard icon={"phone"} detail={event.phone} />
      </div>
      <h4 className="f-700 mt-5">Registrations</h4>
      {registrations ? (
        registrations.length !== 0 ? (
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Roll No.</th>
                <th scope="col">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {registrations && registrations.map((registration, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{registration.name}</td>
                    <td>{registration.rollNumber}</td>
                    <td>
                      <a href={"tel:" + registration.phoneNumber}>
                        {registration.phoneNumber}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h5 className="text-center">No registraions yet</h5>
        )
      ) : (
        <div
          style={{ height: "20vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ height: "3rem", width: "3rem" }}
            role="status"
          ></div>
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
}
