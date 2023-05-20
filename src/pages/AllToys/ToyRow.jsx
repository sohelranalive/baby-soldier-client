import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const ToyRow = ({ product }) => {

    const { _id, toy_photo, seller_name, category, toy_name, price, quantity } = product;

    let sub_category = ''

    if (category === '2to6') {
        sub_category = 'Ages: 2-6 years'
    }
    if (category === '7to10') {
        sub_category = 'Ages: 7-10 years'
    }
    if (category === '11toa') {
        sub_category = 'Ages: 11 years and up'
    }

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
        <tr>
            <th>
                <div className="avatar">
                    <div className="border-2 border-[#F7CD2E] w-16 h-16 rounded-md">
                        <img src={toy_photo} alt="toy" />
                    </div>
                </div>
            </th>
            <th>{seller_name}</th>
            <td>{sub_category}</td>
            <td>{toy_name.slice(0, 40)}...</td>
            <td className="text-center">{price}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center">
                <button onClick={() => handleViewDetails(_id)} className="btn btn-primary btn-sm">Details</button>
                {/* <Link to={`/toyDetails/${_id}`} className="btn btn-primary btn-sm">Details</Link> */}
            </td>
        </tr>
    );
};

export default ToyRow;