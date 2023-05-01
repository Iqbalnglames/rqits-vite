import { useState } from "react";
import { Link } from "react-router-dom";

const Absen = () => {
    const [result, setResult] = useState('')
    
    const tambahAbsen = async() => {
        setResult('silahkan scan')
        const nfc = navigator.nfc
          try {
            // menunggu NFC tag ditemukan
            const tag = await nfc.scan();
        
            // membaca data dari NFC tag
            const ndef = await tag.readNDEF();
            const message = ndef[0].message;
        
            //mengirim ke state hook
            setResult(`Pegawai dengan Nomer Pegawai ${message} berhasil melakukan absensi.`)
             
          } catch (error) {
            console.error(error);
            if(error){
                setResult('NFC tidak ditemukan')
            }
          }
      
    }
    return (
        <div className="mt-28">
           <button onClick={tambahAbsen}>Absen Dimari</button> 
           <h1>{result}</h1>
           <Link to={'/user'}>Kembali</Link>
        </div>
    )
}
export default Absen