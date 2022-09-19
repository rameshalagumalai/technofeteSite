import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import {
  getAttributeOfUser,
  getSpecificEvent,
  newRegistration,
  tConvert,
} from "./apiRequests/Requests";
import DetailCard from "./DetailCard";
import Loader from "./Loader.jsx";
import eventImages from "../EventsImages.js";

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [userEvents, setUserEvents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(1);

  const { user, token } = useAuth();

  const [eventStatus, setEventStatus] = useState(false);

  useEffect(() => {
    getEvent();
    getUserEvents();
  }, [eventId, user]);

  async function getEvent() {
    const { isAdmin } = await getAttributeOfUser(user, "name");
    setIsAdmin(isAdmin);
    setEvent(await getSpecificEvent(eventId));
  }

  async function getUserEvents() {
    var alreadyEvents = await getAttributeOfUser(user, "events");
    setUserEvents(
      alreadyEvents.filter((alreadyEvent) => {
        return alreadyEvent.id === eventId;
      })
    );
  }

  async function handleRegistration() {
    if (user !== "") {
      if (!(await newRegistration(user, eventId, token))) {
        toast.error("Couldn't register");
      } else {
        getEvent();
        getUserEvents();
      }
    } else {
      toast.error("Sign in to register");
    }
    document.getElementById("eventRegClose").click();
  }

  return event.name ? (
    <div className="col-lg-12 col-md-12 col-sm-12 h-auto page">
      <div
        style={{
          height: "23rem",
          backgroundImage: `url("${eventImages[eventId]}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "0px -25px 100px 10px rgba(0,0,0,0.5) inset",
        }}
        className="w-100 position-relative"
      >
        <div className="position-absolute bottom-0 row d-flex w-100">
          <div className="col-sm-6">
            <h3 className="f-700 p-2 text-white">{event.name}</h3>
            <p className="fw-semibold p-2 text-white">
              {"Conducted by " + event.club_name}
            </p>
          </div>
          {event.total_seats > 0 && isAdmin === 0 && (
            <div className="col-sm-6 text-end ms-auto">
              <p className="ms-auto text-white text-end">
                {"Registrations Available: " + event.total_seats}
              </p>
              {userEvents.length === 0 ? (
                <button
                  type="button"
                  className="btn btn-primary m-2"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmRegistrationModal"
                >
                  Register
                </button>
              ) : (
                <button className="btn btn-secondary" disabled>
                  Already registered
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        style={{ padding: "2rem 7%" }}
        className="w-100 col-lg-12 col-md-10 col-sm-3 d-flex flex-column"
      >
        <h4 className="f-700">Description</h4>
        <p>{event.description}</p>
      </div>
      <div className="container-fluid">
        <div className="row section d-flex justify-content-center align-items-center">
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
      </div>
      {event.total_seats > 0 && (
        <div className="container-fluid text-center">
          {userEvents.length === 0 ? (
            <button
              type="button"
              className="btn btn-lg btn-primary h-25 m-5"
              data-bs-toggle="modal"
              data-bs-target="#confirmRegistrationModal"
            >
              Register
            </button>
          ) : (
            <button className="btn btn-secondary btn-lg h-25 m-5" disabled>
              Already registered
            </button>
          )}
        </div>
      )}

      <div
        className="modal fade"
        id="confirmRegistrationModal"
        tabIndex="-1"
        aria-labelledby="confirmRegistrationModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title f-700" id="confirmRegistrationModal">
                Confirm Registration
              </h5>
              <button
                type="button"
                id="eventRegClose"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {eventStatus ? (
                <p>Successfully Registered</p>
              ) : (
                <>
                  <p>
                    <strong>Event Name: </strong>
                    {event.name}
                  </p>
                  <p>
                    <strong>Organized By: </strong>
                    {event.club_name}
                  </p>
                  <p>
                    <strong>Date: </strong>
                    {event.date}
                  </p>
                  <p>
                    <strong>Time: </strong>
                    {tConvert(event.start_time.substring(0, 5))}
                  </p>
                  <p>
                    <strong>Venue: </strong>
                    {event.venue}
                  </p>
                  <p className="text-danger">
                    Note: Once registered, the registration cannot be undone and
                    you will be unable to register for other events at the same
                    time slot
                  </p>
                </>
              )}
            </div>

            <div className="modal-footer">
              {eventStatus ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleRegistration();
                  }}
                >
                  Confirm
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default EventPage;
