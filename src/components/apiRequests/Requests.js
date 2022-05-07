import axios from "axios";

export async function createUser(details){
    await axios.post("http://localhost:5000/signup", details)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    console.log(details);
}