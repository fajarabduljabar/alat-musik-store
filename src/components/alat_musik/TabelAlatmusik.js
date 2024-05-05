import React from "react";
import Layout from "../Layout.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TabelAlatMusik() {
  const [alats, setAlats] = useState([]);

  useEffect(() => {
    const fetchAlats = async () => {
      try {
        const response = await axios.get("http://localhost:3001/alatmusik/index.php");
        setAlats(response.data.data);
      } catch (error) {
        console.log("Error fetching alats:", error);
      }
    };
    fetchAlats();
  }, []);

  const deleteAlat = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/alatmusik/delete.php?id=${id}`);
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
        <h2 className="title">Alat Musik</h2>
        <h3 className="subtitle">List Alat Musik</h3>
        <Link to={"/alat-musik/add"} className="btn btn-primary mb-2">
          Add New
        </Link>

        <table class="table border">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Stok</th>
              <th>Harga</th>
              <th>Jenis Alat Musik</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alats.map((alat,index)=>{
              return(
            <tr>
              <td>{index + 1}</td>
              <td>{alat.nama}</td>
              <td>{alat.stok}</td>
              <td>{alat.harga}</td>
              <td>{alat.jenis_alat_musik_id}</td>
              
              <td>
                <Link
                  to={`/alat-musik/edit/${alat.id}`}
                  className="btn btn-info small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    if (window.confirm("Apakah anda yakin ingin menghapus?")) {
                      deleteAlat(alat.id);
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

export default TabelAlatMusik;
