export default function DetailCard({ icon, detail }){
    return (
        <div
          className="col-lg-3 m-2 card shadow d-flex flex-row align-items-center justify-content-evenly"
          style={{ width: "300px", height: "100px" }}
        >
            <div className="w-25 text-center">
            <i className={"fa-solid fa-"+icon+" fa-2x text-blue"}></i>
            </div>
            <h6 className="w-75">{detail}</h6>
        </div>
    );
}