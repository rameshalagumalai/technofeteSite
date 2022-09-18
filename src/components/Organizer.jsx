import { useState } from "react";

export default function Organizer() {
  const [oraganizers, setOraganizers] = useState([
    {
      name: "Dr. A. Rathinavelu",
      designation: "Principal",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/principal.jpg?alt=media&token=1f2490fe-d201-4380-9e93-ff59be33b784",
      class: "",
    },
    {
      name: "Dr. P. Govindasamy",
      designation: "Vice Principal",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/vice_principal.jpeg?alt=media&token=e4887acf-bbb0-4766-b3a7-960cc39ebfd7",
      class: "",
    },
    {
      name: "Dr. A. Sakthivel",
      designation: "SPICES Coordinator",
      imageLink: "",
      class: "",
    },
    {
      name: "Senthilkumar K",
      designation: "SPICES Ass. Coordinator",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/senthil_sir.jpeg?alt=media&token=65e446f9-7f6e-4353-8c7a-0201c4f55b74",
      class: "",
    },
    {
      name: "Veeraraghavan V",
      designation: "SGS President",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/veera.jpg?alt=media&token=a147a4fa-cdfb-45a3-9285-411ca96ca889",
      class: "IV CSE",
    },
    {
      name: "Chethan Kumar C",
      designation: "SGS Vice President",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/chethan.jpg?alt=media&token=605ff965-be5c-43d0-8956-35b20fa84e67",
      class: "IV IT",
    },
    {
      name: "Mohana Prasath M",
      designation: "SGS Secretary",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/mohan.jpg?alt=media&token=98a1c79e-3a26-4202-83ac-c1aeb18e07a6",
      class: "IV CIVIL",
    },
    {
      name: "Vaideshwari B",
      designation: "Women's Welfare Coordinator",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/vaitheeswari.jpeg?alt=media&token=03900363-04b1-4ecb-aa2f-114d68cd3a62",
      class: "IV ECE",
    },
    {
      name: "Shyam D",
      designation: "IT Coordinator",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/shyam.jpg?alt=media&token=ed1e4945-e5ea-4a17-a4b3-9620d164f60a",
      class: "IV CSE",
    },
    {
      name: "Nivetha S",
      designation: "Treasurer",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/nivetha.jpeg?alt=media&token=bc19397e-33d7-4558-a2f7-78805781cd9f",

      class: "IV CSE",
    },
  ]);

  const [sgsList, setSgsList] = useState([
    { name: "Sanjay K", designation: "Joint Secretary", dept: "Mech" },
    { name: "Subhiksha K", designation: "Circuit Stream PC", dept: "EEE" },
    {
      name: "Shivabharathkumar M",
      designation: "Core Stream PC",
      dept: "Auto",
    },
    { name: "Thinesh A C", designation: "IT Stream PC", dept: "IT" },
    { name: "Nandakumar S", designation: "Academic Coordinator", dept: "MCT" },
    {
      name: "Sangamithra S",
      designation: "Academic Coordinator",
      dept: "Civil",
    },
    { name: "Gokul M", designation: "Library Coordinator", dept: "EEE" },
    { name: "Praveena A", designation: "Library Coordinator", dept: "Civil" },
    { name: "Sandhya", designation: "Co-curriculum", dept: "CSE" },
    { name: "Vaidheeswaran C R", designation: "Extra Curriculum", dept: "MCT" },
    {
      name: "Priyadharshini K",
      designation: "Students Counselling",
      dept: "CSE",
    },
    {
      name: "Dharmaseelan M",
      designation: "Students Counselling",
      dept: "Civil",
    },
    { name: "Ramakrishnan S", designation: "Alumini Coordinator", dept: "MCT" },
    {
      name: "Priyanaka Kumaran ",
      designation: "College Branding",
      dept: "EEE",
    },
    { name: "Pratheswaran H", designation: "College Branding", dept: "Mech" },
    { name: "Sri Hari S", designation: "Hostel Coordinator", dept: "MCT" },
    { name: "Sugi Varshini D", designation: "Hostel Coordinator", dept: "EEE" },
    {
      name: "Krithik Vaishnav A D",
      designation: "Sports Coordinator",
      dept: "CSE",
    },
    { name: "Lokajanani K C", designation: "Sports Coordinator", dept: "CSE" },
    {
      name: "Praveen Kumar D",
      designation: "Sports Coordinator",
      dept: "Civil",
    },
    { name: "Bharath Kumar P", designation: "EMT Coordinator", dept: "EIE" },
    { name: "Surya Kumar R", designation: "Co-opted", dept: "Civil" },
    { name: "Renu K S", designation: "Co-opted", dept: "CSE" },
    { name: "Rithika G", designation: "Co-opted", dept: "CSE" },
    { name: "Kaviyashree", designation: "Co-opted", dept: "CSE" },
  ]);

  return (
    <div className="page d-flex flex-column justify-content-center align-items-center">
      <div className="col-lg-10">
        <div className="w-100 mx-3 my-4">
          <h3 className="fw-bold">Techofete Organizers</h3>
        </div>
        <div className="w-100 d-flex flex-wrap justify-content-around">
          {oraganizers.map((val) => (
            <div class="card my-3 mx-2" style={{ width: "18rem" }}>
              <img
                src={val.imageLink}
                style={{ height: "18rem" }}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{val.name}</h5>
                <p class="card-text m-0">{val.designation}</p>
                <p class="card-text m-0">{val.class}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-10">
        <h3 className="fw-bold">SGS Members</h3>
        <ol class="list-group list-group-numbered my-2">
          {sgsList.map((val) => (
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{val.name}</div>
                {val.designation} - {val.dept}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
