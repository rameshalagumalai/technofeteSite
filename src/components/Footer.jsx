import logo from "../assets/technofete-logo.jpeg"

export default function Footer() {
    return (
      <div className="footer d-flex align-items-center section text-white row">
        <div className="col-md-6">
          <img src={logo} alt="Technofete" className="rounded-circle mb-3" width="70" height="70" />
          <h4 className="f-700 text-light">Technofete'22</h4>
          <p className="mb-0">An intra-college event organized by the Students' Guild of Service, Dr.Mahalingam College of Engineering and Technology</p>
          <a className="text-white d-block mt-3" href="https://mcet.in" rel="noreferrer" target="_blank"><i className="fa-solid fa-globe"></i> www.mcet.in</a>
        </div>
        <div className="col-md-3 footer-div">
          <h5 className="f-700 text-light mb-3">Contact</h5>
          <a className="text-white d-block mb-2" href="https://instagram.com/sgsmcet" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram me-2"></i> @sgsmcet</a>
          <a className="text-white d-block mb-2" href="mailto:sgs@drmcet.ac.in" rel="noreferrer" target="_blank"><i className="fa-solid fa-envelope me-2"></i> sgs@drmcet.ac.in</a>
          <a className="text-white" href="tel:+919500736805"><i className="fa-solid fa-phone"></i> +91-9500736805</a>
        </div>
        <div className="col-md-3 footer-div">
          <h5 className="f-700 text-light mb-3">Developers</h5>
          <a className="text-white d-block mb-2" href="https://nimalan.vercel.app/" rel="noreferrer" target="_blank"><i className="fa-solid fa-globe me-2"></i>Nimalan S (IV CSE)</a>
          <a className="text-white d-block mb-2" href="https://rameshalagumalai.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-globe me-2"></i>Ramesh A (IV CSE)</a>
        </div>
      </div>
    );
}
  
  
