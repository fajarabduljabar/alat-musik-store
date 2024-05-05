
import {BrowserRouter,Routes,Route} from "react-router-dom";

import TabelAlatMusik from "./components/alat_musik/TabelAlatmusik";
import Dashboard from "./components/page/Dashboard";
import LandingPage from "./components/LandingPage";
import AddAlatMusik from "./components/alat_musik/AddAlatMusik";
import EditAlatMusik from "./components/alat_musik/EditAlatMusik";
import TabelPesanan from "./components/pesanan/TabelPesanan";
import AddPesanan from "./components/pesanan/AddPesanan";


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes> 
      <Route path="/" element={<LandingPage/>}/> 
      <Route path="/:id" element={<LandingPage/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/alat-musik" element={<TabelAlatMusik />}></Route>
        <Route path="/alat-musik/add" element={<AddAlatMusik />}></Route>
        <Route path="/alat-musik/edit/:id" element={<EditAlatMusik />}></Route>

        <Route path="/pesanan" element={<TabelPesanan />}></Route>
        <Route path="/pesanan/add" element={<AddPesanan/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
