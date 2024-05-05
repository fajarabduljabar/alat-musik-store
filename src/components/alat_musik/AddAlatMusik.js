import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAlatMusik = () => {
  const [nama, setNama] = useState("");
  const [stok, setStok] = useState("");
  const [harga, setHarga] = useState("");
  const [jenis_alat_musik_id, setJenisAlatMusikId] = useState("");
  const navigate = useNavigate();



  const saveAlatMusik = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/alatmusik/create.php",
        {
          nama: nama,
          stok: stok,
          harga: harga,
          jenis_alat_musik_id: jenis_alat_musik_id,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // redirect ke /table-course
      navigate("/alat-musik");
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
        <h2 className="title">Alat Musik</h2>
        <h3 className="subtitle">Add New Alat Musik</h3>
        <div class="card" style={{ width: "100vh" }}>
          <div class="card-body">
            <form onSubmit={saveAlatMusik}>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Masukkan nama alat"
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">Stok</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setStok(e.target.value)}
                    placeholder="Masukkan stok"
                  />
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">Harga</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setHarga(e.target.value)}
                    placeholder="Masukkan harga"
                  />
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">Jenis Alat Musik</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setJenisAlatMusikId(e.target.value)}
                    placeholder="Jenis Alat Musik Id"
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

export default AddAlatMusik;
