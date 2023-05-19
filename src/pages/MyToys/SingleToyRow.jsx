import { FaEdit, FaTrashAlt } from "react-icons/fa";

const SingleToyRow = ({ product }) => {

    const { toy_photo, description, category, toy_name, price, quantity } = product;

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
                    <div className="mask mask-squircle w-14 h-14">
                        <img src={toy_photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </th>
            <td>{sub_category}</td>
            <td className='w-16'>
                <h1>{toy_name}</h1>
                <br />
                <p>Details: {description.slice(0, 50)}.....</p>
            </td>
            <td className="text-center">{price}</td>
            <td className="text-center">{quantity}</td>
            <td className="space-x-2 text-center">
                <button className="btn btn-circle bg-primary border-primary"><FaEdit className="h-6 w-6" /></button>
                <button className="btn btn-circle bg-red-600 border-red-600 "><FaTrashAlt className="h-6 w-6" /></button>
            </td>
        </tr>
    );
};

export default SingleToyRow;