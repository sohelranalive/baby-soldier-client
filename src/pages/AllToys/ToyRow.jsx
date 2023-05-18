import { Link } from "react-router-dom";

const ToyRow = ({ product }) => {

    const { seller_name, category, toy_name, price, quantity } = product;

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
            <th>{seller_name}</th>
            <td>{sub_category}</td>
            <td>{toy_name}</td>
            <td>{price}</td>
            <td className="text-center">{quantity}</td>
            <td><Link to='/toyDetails' className="btn btn-primary btn-sm">Details</Link></td>
        </tr>
    );
};

export default ToyRow;