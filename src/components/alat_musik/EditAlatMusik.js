import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAlatMusik = () => {
  const [nama, setNama] = useState("");
  const [stok, setStok] = useState("");
  const [harga, setHarga] = useState("");
  const [jenis_alat_musik_id, setJenisAlatMusikId] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [alat, setAlat] = useState([]);

  const getAlatById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/alatmusik/show.php?id=${id}`
      );
      setAlat(response.data.data);
        console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlatById();
  }, []);

  const updateAlatMusik = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/alatmusik/update.php?id=${id}`, {
        nama: nama,
        stok: stok,
        harga: harga,
        jenis_alat_musik_id: jenis_alat_musik_id,
      });
      navigate("/alat-musik");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row mt-3">
      <div className="col-3">
        <Layout />
      </div>
      <div className="col-8">
        <h2 className="title">Alat Musik</h2>
        <h3 className="subtitle">Update Alat Musik</h3>
        <div class="card" style={{ width: "100vh" }}>
          <div class="card-body">
            <form onSubmit={updateAlatMusik}>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    value={alat.nama}
                    placeholder="Masukkan nama alat musik"
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
                    value={alat.stok}
                    onChange={(e) => setStok(e.target.value)}
                    placeholder="Masukkan Stok"
                  />
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">Harga</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Masukkan Harga"
                    value={alat.harga}
                    onChange={(e) => setHarga(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="field mt-3">
                <label className="label">Jenis Alat Musik Id</label>
                <div className="control">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Masukkan Harga"
                    value={alat.jenis_alat_musik_id}
                    onChange={(e) => setJenisAlatMusikId(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="field d-flex mt-5">
                <button type="submit" class="btn btn-success mx-2">
                  Submit
                </button>
                <Link to={"/alat-musik"} class="btn btn-warning">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAlatMusik;
