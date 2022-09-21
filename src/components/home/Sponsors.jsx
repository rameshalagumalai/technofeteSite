import { useState } from "react";

const Sponsors = () => {
  const [imageLinks] = useState([
    {
      name: "mcet",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/mcet.svg?alt=media&token=ef3e52bb-5c0c-494b-8b00-5bc2a8f165bc",
    },
    {
      name: "aicte",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/aicte.jpg?alt=media&token=f558a786-613c-44e9-ac2b-b9750a0969a5",
    },
    {
      name: "iste",
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/iste.jpg?alt=media&token=2a10b523-befe-4b7e-ab29-311bc0d123ad",
    },
  ]);

  return (
    <div className="section d-flex flex-column justify-content-center align-items-center">
      <div className="col-lg-12">
        <h3 className="f-700">Sponsors</h3>
      </div>
      <div className="col-lg-12 d-lg-flex">
        {imageLinks.map((link, key) => (
          <div
            className="col-lg-4 text-center d-flex justify-content-center align-items-center mt-2"
            key={key}
          >
            <img className="" src={link.imageLink} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
