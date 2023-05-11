import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const User = () => {
  const [ nama, setNama ] = useState('')
  const token = localStorage.getItem('token')
  const [ photo, setPhoto ] = useState('')
  const navigate = useNavigate('')

  const fetchUserData = async () => {
    axios.defaults.headers.common['Authorization'] =`Bearer ${token}`
    await axios.get('http://192.168.0.156:8000/api/user')
    .then((response)=>{
      setNama(response.data.nama)
      setPhoto(response.data.photo_source)

    })
  }

  useEffect(() => {
    if(!token) {
      navigate('/')
    }
    fetchUserData()
  }, [])
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 drop-shadow-2xl mt-28">
        <div className="card-body">
          <h1></h1>
          <img src={photo} alt="Foto Profil" />
          <h1>Nama: {nama}</h1>
          <h1>Alamat : Madiun Jatim</h1>
          <h1>Mapel yang diajarkan : Akhlak, TIK</h1>
          <Link to={'/absen'} className="btn btn-sm">Absen</Link>
          <button className="btn btn-sm">Pendataan Nilai</button>
          <button className="btn btn-sm">Buat Soal Ujian</button>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};
export default User;
