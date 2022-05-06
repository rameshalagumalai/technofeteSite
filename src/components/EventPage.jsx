import React, { useState } from "react";
import bg2 from "../assets/bg2.jpg";

const EventPage = () => {
  const [eventDetails, setEventDetails] = useState([
    {
      id: 1,
      obj1: "19 May 2022",
      obj2: "calendar",
    },
    {
      id: 2,

      obj1: "Venue: A110",
      obj2: "map-marker",
    },
    {
      id: 3,
      obj1: "10.00 AM",
      obj2: "clock-o",
    },
    {
      id: 4,

      obj1: "₹ 3,000",
      obj2: "trophy",
    },
    {
      id: 5,

      obj1: "₹ 3,000",
      obj2: "trophy",
    },
    {
      id: 6,

      obj1: "₹ 3,000",
      obj2: "trophy",
    },
  ]);

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 h-auto mt-5">
      <div
        style={{
          height: "23rem",
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "0px -25px 100px 10px rgba(0,0,0,0.5) inset",
        }}
        className="w-100 position-relative"
      >
        <div className="position-absolute bottom-0 w-100 d-lg-flex d-sm-flex flex-md-row flex-lg-row flex-sm-column justify-content-between align-items-end">
          <div className="">
            <h3 className="fw-bold p-2 text-white">Event Name</h3>
            <p className="fw-semibold p-2 text-white">Conducted by DigiFlash</p>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <p className="fw-semibold text-white m-0 px-2">
              Registrations Available: 23
            </p>
            <button
              type="button"
              className="btn btn-primary h-25 m-2"
              data-bs-toggle="modal"
              data-bs-target="#confirmRegistrationModal"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ padding: "2rem 7%" }}
        className="w-100 col-lg-12 col-md-10 col-sm-3 d-flex flex-column"
      >
        <h2>Description</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div class="container-fluid my-lg-5">
        <div className="row d-flex justify-content-center justify-content-lg-around align-items-center">
          {eventDetails.map((val, key) =>
            val.id <= 3 ? (
              <div
                key={key}
                className="col-lg-3 m-2 card shadow d-flex flex-row align-items-center justify-content-evenly"
                style={{ width: "300px", height: "100px" }}
              >
                <div className="w-25 text-center">
                  <i class={`fa fa-${val.obj2} fa-2x`} aria-hidden="true"></i>
                </div>
                <h5 className="w-75">{val.obj1}</h5>
              </div>
            ) : null
          )}
        </div>
        <div className="row d-flex justify-content-center justify-content-lg-around align-items-center">
          {eventDetails.map((val, key) =>
            val.id > 3 ? (
              <div
                key={key}
                className="col-lg-3 m-2 card shadow d-flex flex-row align-items-center justify-content-evenly"
                style={{ width: "300px", height: "100px" }}
              >
                <div className="w-25 text-center">
                  <i class={`fa fa-${val.obj2} fa-2x`} aria-hidden="true"></i>
                </div>
                <h5 className="w-75">{val.obj1}</h5>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="container-fluid text-center">
        <button
          type="button"
          className="btn btn-lg btn-primary h-25 m-5"
          data-bs-toggle="modal"
          data-bs-target="#confirmRegistrationModal"
        >
          Register
        </button>
      </div>

      <div
        class="modal fade"
        id="confirmRegistrationModal"
        tabindex="-1"
        aria-labelledby="confirmRegistrationModal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmRegistrationModal">
                Confirm Registration
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                <strong>Event Name: </strong>Coding Event
              </p>
              <p>
                <strong>Organized By: </strong>DigiFlash
              </p>
              <p>
                <strong>Date: </strong>19 May,2022
              </p>
              <p>
                <strong>Time: </strong>10.00 AM
              </p>

              <p>
                <strong>Venue: </strong>A110
              </p>
              <p className="text-danger">
                Note: Once registered, the registration cannot be undone.
              </p>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
