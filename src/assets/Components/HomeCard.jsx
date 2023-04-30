import { Link } from "react-router-dom";
import Student from "../Images/student.svg";
import Teacher from "../Images/teacher.svg";

const Card = () => {
  return (
    <div className="flex justify-center">

      {/* asatidzah card */}
      <div className="card w-96 scale-up-card bg-base-100 drop-shadow-2xl mx-6">
        <figure>
          <img width="200px" src={Teacher} alt="Ustadz" className="py-2" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Asatidzah</h2>
          <p>Sistem informasi khusus Asatidzah</p>
          <div className="card-actions justify-end">
            <Link to={"login"} className="btn btn-primary">
              Masuk
            </Link>
          </div>
        </div>
      </div>
      {/* end asatidzah card */}

      {/* student card */}
      <div className="card w-96 bg-base-100 scale-up-card drop-shadow-2xl mx-6">
        <figure>
          <img width="150px" src={Student} alt="Santri" className="py-2"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Santri</h2>
          <p>Media pembelajaran digital santri</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Masuk</button>
          </div>
        </div>
      </div>
      {/* end student card */}

    </div>
  );
};
export default Card;
