import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl mx-6">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Asatidzah</h2>
          <p>Sistem informasi khusus Asatidzah</p>
          <div className="card-actions justify-end">
            <Link to={'login'} className="btn btn-primary">Masuk</Link>
          </div>
        </div>
      </div>
      
      <div className="card w-96 bg-base-100 shadow-xl mx-6">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Santri</h2>
          <p>Media pembelajaran digital santri</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Masuk</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
