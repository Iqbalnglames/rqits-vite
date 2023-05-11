import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Absen = () => {
  const [logs, setLogs] = useState('')
  const token = localStorage.getItem('token')
  const [ nama, setNama ] = useState('')
  const [ serialNumber, setSerialNumber ] = useState('')
  const [ ndefNumber, setNdefNumber ] = useState()
  const waktu = new Date().toLocaleString()

  const navigate = useNavigate()

  const fetchUserData = async () => {
    axios.defaults.headers.common['Authorization'] =`Bearer ${token}`
    await axios.get('http://192.168.0.156:8000/api/user')
    .then((response)=>{
      setNama(response.data.nama)
      setSerialNumber(response.data.serialNumber)
    })
  }

  useEffect(() => {
    if(!token) {
      navigate('/')
    }
    fetchUserData()
  }, [])

  const handleScanButtonClick = async () => {
    setLogs([...logs, "User clicked scan button"]);

    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      setLogs([...logs, "> Silahkan scan kartu anda"]);

            ndef.addEventListener("readingerror", () => {
              setLogs([...logs, "Kartu tidak terbaca, coba lagi"]);
            });
      
            ndef.addEventListener("reading", ({  serialNumber }) => {
              setNdefNumber(serialNumber)
              const formData = {nama, waktu, serialNumber}
  
              if(ndefNumber === serialNumber) {
                axios.post('http://192.168.0.156:8000/api/absen', formData)
                .then(()=> { 
                  setLogs([...logs, 'berhasil absen'])       
                    navigate('/user')
                  })
                } else {
                  setLogs([...logs, 'nomer kartu berbeda dengan yang terdaftar'])
                }
            });                   
              
            
            
          } catch (error) {
            setLogs([...logs, "Argh! " + error]);
          }
        };
       
        
     
    
    return (
        <div className="mt-28">
           <button onClick={handleScanButtonClick}>Absen Dimari</button> 
           <h1>{logs}</h1>
           <Link to={'/user'}>Kembali</Link>
        </div>
    )
}
export default Absen