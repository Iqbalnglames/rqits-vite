import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import WhiteLogo from "../Images/PPRQ-logo-white.png"
import BlackLogo from "../Images/PPRQ-logo.png"
const Login = () => {
    const Dark = window.matchMedia("(prefers-color-scheme: halloween)").matches;
    const [ Theme ] = useLocalStorage(
        "theme",
        Dark ? "halloween" : "autumn"
      );
    return (
        <div className="flex justify-center py-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                {Theme === 'halloween' ?  <img
                        src={WhiteLogo}
                        alt="Shoes"
                        className="rounded-xl"
                    /> :  <img
                    src={BlackLogo}
                    alt="Shoes"
                    className="rounded-xl"
                />}
                   
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">Login untuk mengakses akun anda (khusus Asatidzah)</h2>
                    <p>Privasi Anda Akan Kami Jaga InsyaAllah</p>
                    <div className="block">
                        <form>
                            <div className="py-2">
                            <input type="text" placeholder="Username" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                            <div className="py-2">
                            <input type="password" placeholder="Password" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                            <p className="pb-4">belum memiliki akun? silahkan chat <Link className="text-[blue] underline" to={'https://api.whatsapp.com/send/?phone=085156407032&text&type=phone_number&app_absent=0'} target="_blank">Kesini</Link></p>
                        <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
