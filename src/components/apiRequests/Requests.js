import axios from "axios";
import { createUserWithEmailAndPassword, deleteUser, sendEmailVerification } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../firebaseConfig/firebase";

export async function createUser(email) {
  var user;
  var ok = false;
  await createUserWithEmailAndPassword(auth, email, email)
    .then(async (cred) => {
      user = cred.user;
      ok = true;
        sendEmailVerification(user)
          .then(() => {
            toast.success("Verification link sent to your mail");
          })
          .catch(e => {
            ok = false;
            deleteUser(user);
            toast.error(e.message);
          });
      return ok;    
    })
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
          toast.error("This email is already in use");
          break;
        case "auth/weak-password":
          toast.error("The password must be atlest 6 characters long.");
          break;
        default:
          console.log("");
      }
    });
}

export async function addNewUser(details){
      var ok = false;
      await axios
        .post("https://technofete22.herokuapp.com/users", details)
        .then(async ({ data }) => {
          if (data === "Yes") {
            ok = true;
            toast.success(
              "Account created successfully, Welcome " + details.name
            );
          } else {
            toast.error("There was problem in creating the account");
          }
        })
        .catch((e) => {
          toast.error(e.code);
        });
      return ok;  
}

export async function getSpecificEvent(eventId) {
  var result = {};
  await axios
    .get(`https://technofete22.herokuapp.com/events/${eventId}`)
    .then(({ data }) => {
      result = data;
    })
    .catch((e) => {
    });
  return result;
}

export async function getAllEvents() {
  var result = [];
  await axios
    .get("https://technofete22.herokuapp.com/events")
    .then((response) => {
      result = response.data;
    })
    .catch((e) => {
    });
  return result;
}

export async function getUserDetails(id) {
  var result = {};
  await axios
    .get("https://technofete22.herokuapp.com/profile", { id })
    .then(function (response) {
      result = response;
    })
    .catch(function (error) {
    });
  return result;
}

export async function newRegistration(userId, eventId, token) {
  var success = true;
  await axios
    .post("https://technofete22.herokuapp.com/registrations", { userId, eventId, token })
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
      document.getElementById("eventRegClose").click();
    })
    .catch((e) => {
      success = false;
    });
  return success;
}

export async function getAttributeOfUser(userId, attribute) {
  var result;
  await axios
    .get(`https://technofete22.herokuapp.com/users/${userId}/?value=${attribute}`)
    .then(({ data }) => {
      result = data;
    })
    .catch((e) => {
      result = e.message;
    });
  return result;
}

export async function getEventRegistrations(eventId, headers) {
  var result = [];
  await axios
    .get(`https://technofete22.herokuapp.com/registrations/?eventId=${eventId}`, { headers: headers })
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
