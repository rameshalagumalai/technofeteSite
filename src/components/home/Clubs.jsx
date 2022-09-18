import { useState } from "react";
import "./style.css";

const Clubs = () => {
  const [imageLinks] = useState([
    {
      clubName: "technofete",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/sgs.svg?alt=media&token=2892d87d-aad7-42bf-91a3-daa97fdee5cd",
    },
    {
      clubName: "sgs",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/technofete.svg?alt=media&token=480cfb2a-bde7-4601-a008-f068f599f1e9",
    },
    {
      clubName: "studio_mcet",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/studio_mcet.svg?alt=media&token=49665c89-c1b2-4aa5-83b4-ec56fe111cec",
    },
    {
      clubName: "gyan",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/gyan.svg?alt=media&token=cdf1f8b6-8608-4051-ae35-30286325ef16",
    },
    {
      clubName: "fine_arts",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/finearts.svg?alt=media&token=b4ee6526-816b-4cd6-accb-a9ed8f9bb6ad",
    },
    {
      clubName: "elixirs",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/elixers.svg?alt=media&token=a19a4ada-f647-402b-8f75-4d2ea5f0c51d",
    },
    {
      clubName: "rostrum",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/rostrum.svg?alt=media&token=efa90673-14c0-40df-af66-afcc7b2c9e65",
    },
    {
      clubName: "film_club",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/filmclub.svg?alt=media&token=38a2c172-6076-4eec-92a8-f4419f69fcf4",
    },
    {
      clubName: "muttamil_mandram",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/muthamil.svg?alt=media&token=13c6375e-cc5a-4a21-ab14-6ccaff867203",
    },
    {
      clubName: "twisters",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/twisters.svg?alt=media&token=e1955443-661b-482e-b926-b2cc8cf25230",
    },
    {
      clubName: "youth_parliment",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/youth_parliment.svg?alt=media&token=12ded5da-22aa-459a-b765-e478c72f4646",
    },
    {
      clubName: "yrc_rrc",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/yrc_rrc.svg?alt=media&token=31ce5b01-65b9-4a55-9136-6e474eda4d80",
    },
    {
      clubName: "ccc",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/ccc.svg?alt=media&token=0fc55470-8a3d-4d43-a76a-9bd1c9325b70",
    },
  ]);

  return (
    <div className="section d-flex flex-column justify-content-center align-items-center">
      <div className="col-lg-12">
        <h3 className="f-700">Clubs and Associations</h3>
      </div>
      <div className="scroll my-5" id="container">
        <div className="i-scroll">
          {imageLinks.map((link, key) => (
            <img key={key} style={{ width: "200px" }} src={link.imageLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
