import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const SingleProductCard = ({ product }) => {

    const { _id, toy_photo, toy_name, price, ratings } = product;

    return (
        <div className="card w-72 h-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={toy_photo} alt="Toy Photo" className="rounded-xl w-64 h-36 border-2 border-primary" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toy_name.slice(0, 35)}</h2>
                <p>Price: ${price}</p>
                <p>Ratings:
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={parseFloat(ratings)}
                        readOnly
                    />
                </p>
                <div className="card-actions">
                    <Link to={`/toyDetails/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;