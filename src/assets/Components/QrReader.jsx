import QrScanner from "qr-scanner";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom'

let stopScan = false;

const Scanner = () => {
  const [btnScan, setBtnScan] = useState(true);
  const [hasilScan, setHasilScan] = useState();
  const [pesan, setPesan] = useState();
  const waktu = new Date().toLocaleString();
  // const navigate = useNavigate('/')

  const handleData = (result) => {
    const formData = new FormData();
    formData.append("nama_ustadz", result.data);
    formData.append("waktu_kehadiran", waktu);
    axios.post("https://rqits.test/api/absen", formData).then((response) => {
      setPesan(response.data.message);
    });
  };

  const handleScan = async (isScan) => {
    setBtnScan(isScan);
    if (isScan) stopScan = true;
    if (btnScan == false) return;
    stopScan = false;
    await new Promise((r) => setTimeout(r, 100));
    const videoElement = document.getElementById("scanView");
    const scanner = new QrScanner(
      videoElement,
      (result) => {
        setHasilScan(result.data);
        setBtnScan(true);
        stopScan = true;
        setTimeout(() => {
          handleData(result);
        }, 2000);
      },

      {
        onDecodeError: (error) => {
          console.error(error);
        },
        maxScansPerSecond: 1,
        highlightScanRegion: true,
        highlightCodeOutline: true,
        returnDetailedScanResult: true,
      }
    );
    await scanner.start();
    while (stopScan == false) await new Promise((r) => setTimeout(r, 100));
    scanner.stop();
    scanner.destroy();
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="block text-center mb-10">
        <button className="btn" onClick={() => handleScan(!btnScan)}>
          Scan
        </button>
        <video
          className="border border-black bg-slate-200"
          id="scanView"
          style={{
            width: "100%",
            height: "100%",
          }}></video>
          {pesan === 'Absen berhasil ditambahkan' ? <h1 className="bg-green-300 text-green-800 py-2 mt-4" >{pesan}</h1> : null}
        
      </div>
    </div>
  );
};

export default Scanner;
