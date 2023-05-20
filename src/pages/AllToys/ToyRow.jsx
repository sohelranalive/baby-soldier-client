import { Link } from "react-router-dom";

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
            <td className="text-center"><Link to={`/toyDetails/${_id}`} className="btn btn-primary btn-sm">Details</Link></td>
        </tr>
    );
};

export default ToyRow;