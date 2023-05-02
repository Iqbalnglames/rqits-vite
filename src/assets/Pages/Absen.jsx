import { useState } from "react";
import { Link } from "react-router-dom";

const Absen = () => {
  const [logs, setLogs] = useState([]);

  const handleScanButtonClick = async () => {
    setLogs([...logs, "User clicked scan button"]);

    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      setLogs([...logs, "> Silahkan scan kartu anda"]);

      ndef.addEventListener("readingerror", () => {
        setLogs([...logs, "Argh! Cannot read data from the NFC tag. Try another one?"]);
      });

      ndef.addEventListener("reading", ({  serialNumber }) => {
        setLogs([...logs, `user dengan serial Number: ${serialNumber} berhasil absen`]);
        
      });
    } catch (error) {
      setLogs([...logs, "Argh! " + error]);
    }
  };
      
    
    return (
        <div className="mt-28">
           <button onClick={handleScanButtonClick}>Absen Dimari</button> 
           <h1>{logs} </h1>
           <Link to={'/user'}>Kembali</Link>
        </div>
    )
}
export default Absen