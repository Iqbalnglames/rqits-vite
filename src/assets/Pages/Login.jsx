import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import WhiteLogo from "../Images/PPRQ-logo-white.png";
import BlackLogo from "../Images/PPRQ-logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [ username, setUsername ] = useState()
  const [ password, setPassword ] = useState()
  const [ validation, setValidation ] = useState()
  const Dark = window.matchMedia("(prefers-color-scheme: halloween)").matches;
  const [Theme] = useLocalStorage("theme", Dark ? "halloween" : "autumn");
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(()=>{
    if(token) {
      navigate('/user')
    }

  })
  const handleLogin = async(e) => {
    e.preventDefault()


    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)


   
      await axios.post('http://192.168.0.156:8000/api/login', formData)
      .then((response)=>{
        localStorage.setItem('token', response.data.token)
        navigate('/user')
      
      })
    
    .catch((error) => {
      setValidation(error.response.data)
    })
  }
 

  return (
    <div className="flex justify-center pt-10 mt-16">
      <div className="card w-96 bg-base-100 drop-shadow-2xl">
        <figure className="px-10 pt-10">
          {Theme === "halloween" ? (
            <img src={WhiteLogo} alt="Shoes" className="rounded-xl" />
          ) : (
            <img src={BlackLogo} alt="Shoes" className="rounded-xl" />
          )}
        </figure>
        <div className="card-body items-center text-center">
         
          <h2 className="card-title font-bold">
            Login untuk mengakses akun anda (khusus Asatidzah)
          </h2>
          <p>Privasi Anda Akan Kami Jaga InsyaAllah</p>
          <div className="block">
            <form onSubmit={handleLogin} method="post">
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered input-error w-full max-w-xs"
                  onChange={(e)=> setUsername(e.target.value)}
                />
              </div>
              <div className="py-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered input-error w-full max-w-xs"
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>
              <p className="pb-4">
                belum memiliki akun? silahkan chat{" "}
                <Link
                  className="text-[blue] underline"
                  to={
                    "https://api.whatsapp.com/send/?phone=6285156407032&text&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                >
                  Kesini
                </Link>
              </p>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
        <Link to={'/'} className="btn btn-secondary">Kembali ke halaman utama</Link>
      </div>
    </div>
  );
};
export default Login;
