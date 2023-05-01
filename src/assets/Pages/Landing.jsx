import LandingCards from "../Components/HomeCard.jsx";
import LearnSVG from "../Images/learn.svg";

const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-center p-52">
        <div className="lg:py-12 text-3xl flex lg:block slide-in-fwd-center">
          <h1 className="font-bold mr-7 lg:mr-0">Ahlan Wa Sahlan</h1>
          <h1 className="text-xl">
            di Sistem Informasi Pesantren untuk santri dan Asatidzah
          </h1>
        </div>
        <div className="slide-in-fwd-center2">
          <img src={LearnSVG} width="400px" alt="orang baca buku" />
        </div>
      </div>
      <h1 className="flex justify-center font-bold mt-[-40px] mb-14">
        Silahkan pilih menu berikut
      </h1>
      <div className="pb-10">
        <LandingCards />
      </div>
    </div>
  );
};
export default LandingPage;
