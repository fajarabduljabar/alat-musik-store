import React from "react";
import Layout from "../Layout.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TabelPesanan() {
  const [pesanans, setPesanans] = useState([]);

  useEffect(() => {
    const fetchPesanans = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pesanan/index.php");
        setPesanans(response.data.data);
      } catch (error) {
        console.log("Error fetching alats:", error);
      }
    };
    fetchPesanans();
  }, []);

  const deletePesanan = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/pesanan/delete.php?id=${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
<div className="row mt-3">
  <div class="col-3"><Layout/>
  </div>
  <div class="col-8 mx-3">
        <h2 className="title">Pesanan</h2>
        <h3 className="subtitle">List Pesanan</h3>
        <Link to={"/pesanan/add"} className="btn btn-primary mb-2">
          Add New
        </Link>

        <table class="table border">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Nama Alat</th>
              <th>No_Hp</th>
              <th>Alamat</th>         
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pesanans.map((pesanan,index)=>{
              return(
            <tr>
              <td>{index + 1}</td>
              <td>{pesanan.nama}</td>
              <td>{pesanan.nama_alat}</td>
              <td>{pesanan.no_hp}</td>
              <td>{pesanan.alamat}</td>
              
              <td>
                <Link
                  to={`/alat-musik/edit/${pesanan.id}`}
                  className="btn btn-info small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    if (window.confirm("Apakah anda yakin ingin menghapus?")) {
                      deletePesanan(pesanan.id);
                    }
                  }}
                  className="btn mx-2 small btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
            )})}
          </tbody>
        </table>
        </div>
</div>

    </div>
  );
}

export default TabelPesanan;
