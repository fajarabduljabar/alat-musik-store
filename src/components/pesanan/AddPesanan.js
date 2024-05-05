import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPesanan = () => {
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
      navigate("/pesanan");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="row mt-3">
      <div class="col-3">
        <Layout />
      </div>
      <div class="col-9">
        <h2 className="title">Pesanan</h2>
        <h3 className="subtitle">Add New Pesanan</h3>
        <div class="card" style={{ width: "100vh" }}>
          <div class="card-body">
            <form onSubmit={savePesanan}>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Masukkan nama"
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">Nama Alat</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setNamaAlat(e.target.value)}
                    placeholder="Masukkan nama_alat"
                  />
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">No Hp</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setNoHp(e.target.value)}
                    placeholder="Masukkan no_hp"
                  />
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Masukkan Alamat"
                  />
                </div>
              </div>

              <div class="field d-flex mt-5">
                <button type="submit" class="btn btn-success mx-2">
                  Submit
                </button>
                <button class="btn btn-warning">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPesanan;
