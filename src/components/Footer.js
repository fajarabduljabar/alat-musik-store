import React, {  useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Footer = () => {
  const [nama, setNama] = useState("");
  const [namaalat, setNamaAlat] = useState("");
  const [nohp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();


  const savePesanan = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/pesanan/create.php",
        {
          nama: nama,
          nama_alat: namaalat,
          no_hp: nohp,
          alamat: alamat,

        },
        {
            headers: {
                "Content-Type": "multipart/form-data",
              },
        }

      );
      // redirect
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {/* Footer*/}
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">
                Copyright © Your Website 2023
              </div>
              <div className="col-lg-4 my-3 my-lg-0">
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a className="link-dark text-decoration-none me-3" href="#!">
                  Privacy Policy
                </a>
                <a className="link-dark text-decoration-none" href="#!">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* Portfolio Modals*/}
        {/* Portfolio item 1 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="show"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/1.jpg"
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client:</strong>
                          Threads
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Illustration
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="pesan"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Nama Alat Musik</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <form onSubmit={savePesanan}>
                        <div className="row align-items-stretch mb-5">
                          <div className="col-md-12">
                          {/* <input type="text" value={alat.nama} hidden id="nama_alat" onChange={(e)=> setNamaAlat(e.target.value)} name="nama_alat"/> */}
                            <label className="float-start mb-2 mx-3" for="">Nama</label>
                            <div className="form-group mb-3">
                              {/* Name input*/}
                              <input
                                className="form-control"
              
                                type="text"
                                placeholder="Masukkan Nama"
                                data-sb-validations="required"
                                onChange={(e) => setNama(e.target.value)}
                              />
                              <div
                                className="invalid-feedback"
                                data-sb-feedback="name:required"
                              >
                                A name is required.
                              </div>
                            </div>
                            <label className="float-start mb-2 mx-3" for="">Nama Alat</label>
                            <div className="form-group mb-3">
                              {/* Email address input*/}
                              <input
                                className="form-control"
                                id="nama_alat"
                                type="text"
                                placeholder="Masukkan Alamat"
                                data-sb-validations="required"
                                onChange={(e) => setNamaAlat(e.target.value)}
                              />
                            </div>
                            <label className="float-start mb-2 mx-3" for="">Alamat</label>
                            <div className="form-group mb-3">
                              {/* Email address input*/}
                              <input
                                className="form-control"
                                id="alamat"
                                type="text"
                                placeholder="Masukkan Alamat"
                                data-sb-validations="required,email"
                                onChange={(e) => setAlamat(e.target.value)}
                              />
                            </div>
                            <label className="float-start mb-2 mx-3" for="">Nomor Telepon</label>
                            <div className="form-group mb-md-0">
                              {/* Phone number input*/}
                              <input
                                className="form-control"
                                type="number"
                                placeholder="Masukkan No.Hp"
                                data-sb-validations="required"
                                onChange={(e) => setNoHp(e.target.value)}
                              />
                              <div
                                className="invalid-feedback"
                                data-sb-feedback="phone:required"
                              >
                                A phone number is required.
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Submit success message*/}
                        {/**/}
                        {/* This is what your users will see when the form*/}
                        {/* has successfully submitted*/}
                        <div className="d-none" id="submitSuccessMessage">
                          <div className="text-center text-white mb-3">
                            <div className="fw-bolder">
                              Form submission successful!
                            </div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">
                              https://startbootstrap.com/solution/contact-forms
                            </a>
                          </div>
                        </div>
                        {/* Submit error message*/}
                        {/**/}
                        {/* This is what your users will see when there is*/}
                        {/* an error submitting the form*/}
                        <div className="d-none" id="submitErrorMessage">
                          <div className="text-center text-danger mb-3">
                            Error sending message!
                          </div>
                        </div>
                        {/* Submit Button*/}
                       
                      
                      <button
                       data-bs-dismiss="modal"       
                        className="btn btn-primary btn-xl text-uppercase"
                        
                        type="submit"
                      >
                        <i className="fas fa-paper-plane me-1" />
                        Pesan Sekarang
                      </button>
                      </form>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
