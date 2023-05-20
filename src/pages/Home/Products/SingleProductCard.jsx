import { useNavigate } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { toast } from 'react-toastify';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const SingleProductCard = ({ product }) => {
    const { _id, toy_photo, toy_name, price, ratings } = product;

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const notify = () => toast.warning('You have to log in first to view details', {
        position: "top-right",
        autoClose: 3000,
    });

    const handleViewDetails = (_id) => {
        const url = `/toyDetails/${_id}`

        if (user) {
            return navigate(url)
        }
        notify()
        navigate(url)
    }

    return (
        <div className="card w-72 h-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={toy_photo} alt="Toy Photo" className="rounded-xl w-64 h-36 border-2 border-primary" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toy_name.slice(0, 35)}</h2>
                <p>Price: ${price}</p>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={parseFloat(ratings)}
                    readOnly
                />
                <div className="card-actions">
                    <button onClick={() => handleViewDetails(_id)} className="btn btn-primary">View Details</button>
                    {/* <Link to={`/ toyDetails / ${ _id }`} className="btn btn-primary">View Details</Link> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;