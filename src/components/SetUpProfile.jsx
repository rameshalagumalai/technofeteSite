import { useState } from "react";
import logo from "../assets/technofete-logo-2.jpeg";
import { useAuth } from "../context/authContext";
import bg1 from "../assets/bg1.jpg";
import { checkPasswordMatch, validateName, validatePassword } from "../Validate";
import toast from "react-hot-toast";
import { addNewUser } from "./apiRequests/Requests";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig/firebase";
import { sendEmailVerification, signInWithEmailAndPassword, updatePassword } from "firebase/auth";

export default function SetUpProfile(){

    const [name, setName] = useState("Nimalan S");
    const [phoneNumber, setPhoneNumber] = useState("9876543210");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { currentUser, setCurrentUser, token } = useAuth();

    const navigate = useNavigate();
 
    async function handleSetUp(e){
        e.preventDefault();
        if(validateName(name)){
          if(phoneNumber.length === 10){
            if(validatePassword(password)){
              if(checkPasswordMatch(password, confirmPassword)){
                await signInWithEmailAndPassword(auth, currentUser.email, currentUser.email)
                  .then(async cred => {
                    const currentUser = cred.user;
                    setCurrentUser(currentUser);
                    if(currentUser.emailVerified){
                      await updatePassword(currentUser, password)
                      .then(async () => {
                            const details = {
                            userid: currentUser.uid,
                            rollno: currentUser.email.substring(0, currentUser.email.indexOf('@')),
                            name,
                            email: currentUser.email,
                            phoneNumber,
                            isAdmin: 0,
                            token
                          };
                          if(await addNewUser(details)){
                            navigate("/profile");
                          }else{
                            toast.error("Account not created successfully");
                            updatePassword(currentUser, currentUser.email);
                          }
                      })
                      .catch(e => {
                        toast.error(e.message);
                      });
                    }else{
                      toast.error("Email not verified");
                    }
                })
                .catch(e => {
                  console.log(e.message);
                })
              }else{
                toast.error("Passwords don't match");
              }
            }else{
              toast.error("Enter a password that comprises of 8 to 20 characters and has atleast 1 upper case & lower case letters, 1 number and 1 special character")
            }
          }else{
            toast.error("Phone number must contain exactly 10 digits")
          }
        }else{
          toast.error("Invalid name");
        }
    }

    async function sendVerification(){
      signInWithEmailAndPassword(auth, currentUser.email, currentUser.email)
        .then(cred => {
          sendEmailVerification(cred.user)
            .then(() => {
              toast.success("Verification link sent to your mail");
            })
            .catch(e => {
              toast.error("Verification link not sent, try again after some time");
            })
        })
        .catch(e => {
          toast.error("Verification link not sent, try again after some time");
        })
    }

    return (
        <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="container-fluid d-flex justify-content-center align-items-center page"
    >
      <form
        onSubmit={(e) => handleSetUp(e)}
        className="col-lg-4 br-super p-4 bg-white m-3"
      >
        <div className="text-center">
          <img className="m-auto w-25" src={logo} alt="technofete" />
        </div>
        <h3 className="f-700 text-blue">Set Up Profile</h3>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <label className="mt-3">Mobile number (Whatsapp)</label>
        <input
          type="tel"
          className="form-control"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {const ch = e.target.value.slice(-1); if((ch >= '0' && ch <= '9') || ch === ""){setPhoneNumber(e.target.value)}}}
          placeholder="eg: 9876543210"
        />
        <label className="mt-3">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type a strong password"
        />
        <label className="mt-3">Confirm password</label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-type the password"
        />
        <div className="d-flex mt-4 align-items-center mb-3">
          <a onClick={() => sendVerification()} className="text-primary" style={{cursor: "pointer"}}>Resend verification email</a>
          <button type="submit" className="btn btn-success ms-auto">
            Set Up
          </button>
        </div>
      </form>
    </div>
    );
}