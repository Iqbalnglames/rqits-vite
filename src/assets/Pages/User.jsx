import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Absen from "./AbsenQr";

const User = () => {
  const [ nama, setNama ] = useState('')
  const token = localStorage.getItem('token')
  // const [ photo, setPhoto ] = useState('')
  const navigate = useNavigate('')

  // const fetchUserData = async () => {
  //   axios.defaults.headers.common['Authorization'] =`Bearer ${token}`
  //   await axios.get('https://rqits.test/api/user')
  //   .then((response)=>{
  //     setNama(response.data.nama)
  //   })
  // }

  // useEffect(() => {
  //   if(!token) {
  //     navigate('/')
  //   }
  //   fetchUserData()
  // }, [])

  const logoutHandler = async() => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    await axios.post(' https://rqits.test/api/logout')
    .then(()=>{
      localStorage.removeItem('token')
      navigate('/login')
    })

  }

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 drop-shadow-2xl mt-28">
        <div className="card-body">
          <h1 className="text-center text-xl font-semibold">Tempat Absensi</h1>
          {/* <img src={photo} alt="Foto Profil" /> */}
          <h1 className="text-center">tekan tombol absen untuk melakukan absensi kehadiran</h1>
          {/* The button to open modal */}
<a href="#my-modal-2" className="btn btn-md">Absen</a>

          {/* <h1>Nama: {nama}</h1>
          <h1>Alamat : Madiun Jatim</h1>
          <h1>Mapel yang diajarkan : Akhlak, TIK</h1> */}
          {/* <button className="btn btn-sm">Pendataan Nilai</button> */}
          {/* <button className="btn btn-sm">Buat Soal Ujian</button> */}
          <button onClick={logoutHandler} className="btn btn-danger bg-red-600 hover:bg-red-800">Logout</button>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <p></p>
<div className="modal" id="my-modal-2">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Silahkan scan disini</h3>
    <p className="py-4"><Absen /></p>
    <div className="modal-action">
     <a href="#" className="btn">tutup</a>
    </div>
  </div>
</div>
    </div>
  );
};
export default User;
