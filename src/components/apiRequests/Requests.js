import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../firebaseConfig/firebase";

export async function createUser(details) {
  var userData = details;

  await createUserWithEmailAndPassword(auth, details.email, details.password)
    .then(async (cred) => {
      var token = "";
      await cred.user.getIdToken(false)
        .then(idToken => {
          token = idToken;
        })
        .catch(e => {
          console.log(e.message);
        })
      userData = { ...userData, ["userid"]: cred.user.uid, ["isAdmin"]: 0, token };
      await axios
        .post("http://localhost:5000/users", userData)
        .then(({ data }) => {
          if (data === "Yes") {
            toast.success(
              "Account created successfully, Welcome " + userData.name
            );
          } else {
            toast.error("There was problem in creating the account");
          }
        })
        .catch((e) => {
          toast.error(e.code);
        });
    })
    .catch((err) => {
      console.log(err);
      switch (err.code) {
        case "auth/email-already-in-use":
          toast.error("This email is already in use");
          break;
        case "auth/weak-password":
          toast.error("The password must be atlest 6 characters long.");
          break;
        default:
          console.log("Default");
      }
    });
}

export async function getSpecificEvent(eventId) {
  var result = {};
  await axios
    .get(`http://localhost:5000/events/${eventId}`)
    .then(({ data }) => {
      result = data;
    })
    .catch((e) => {
      console.log(e.message);
    });
  return result;
}

export async function getAllEvents() {
  var result = [];
  await axios
    .get("http://localhost:5000/events")
    .then((response) => {
      result = response.data;
    })
    .catch((e) => {
      console.log(e.message);
    });
  return result;
}

export async function getUserDetails(id) {
  var result = {};
  await axios
    .get("http://localhost:5000/profile", { id })
    .then(function (response) {
      result = response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
}

export async function newRegistration(userId, eventId, token) {
  var success = true;
  await axios
    .post("http://localhost:5000/registrations", { userId, eventId, token })
    .then(({ data }) => {
      switch (data) {
        case 1:
          toast.success("Registered");
          break;
        case 2:
          toast.error(
            "You already have an event registered in this time schedule"
          );
          break;
        default:
          toast.error(data);
      }
    })
    .catch((e) => {
      success = false;
    });
  return success;
}

export async function getAttributeOfUser(userId, attribute) {
  var result;
  await axios
    .get(`http://localhost:5000/users/${userId}/?value=${attribute}`)
    .then(({ data }) => {
      result = data;
    })
    .catch((e) => {
      result = e.message;
    });
  return result;
}

export async function getEventRegistrations(eventId) {
  var result = [];
  await axios
    .get(`http://localhost:5000/registrations/?eventId=${eventId}`)
    .then(({ data }) => {
      result = data;
    })
    .catch((e) => {
      toast.error(e.message);
    });
  return result;
}

export function tConvert(time) {
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? " AM" : " PM";
    time[0] = +time[0] % 12 || 12;
  }
  return time.join("");
}
