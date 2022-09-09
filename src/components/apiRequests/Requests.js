import axios from "axios";

export async function createUser(details) {
  await axios
    .post("http://localhost:5000/signup", details)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
