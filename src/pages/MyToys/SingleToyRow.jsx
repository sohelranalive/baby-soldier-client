import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Modal from "./Modal";
import { useState } from "react";


const SingleToyRow = ({ product, control, setControl }) => {

    const { _id, toy_photo, description, category, toy_name, price, quantity } = product;

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

    const handleDeleteProduct = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to restore this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        if (data.deletedCount > 0) {
                            setControl(!control)
                        }
                    })
            }
        })
    }

    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState('')

    const handleEditProduct = (_id) => {
        setIsOpen(true)
        setId(_id)
    }


    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="border-2 border-primary w-16 h-16 rounded-md">
                        <Link to={`/toyDetails/${_id}`}>
                            <abbr title="View Details">
                                <img src={toy_photo} alt="toy" />
                            </abbr>
                        </Link>
                    </div>
                </div>
            </th>
            <td>{sub_category}</td>
            <td className='w-16'>
                <h1>{toy_name.slice(0, 35)}...</h1>
                <br />
                <p>Description: {description.slice(0, 40)}.....</p>
            </td>
            <td className="text-center">{price}</td>
            <td className="text-center">{quantity}</td>
            <td className="space-x-2 text-center">
                {/* <Link to={`/updateToyDetails/${_id}`} className="btn btn-circle bg-primary border-primary"><FaEdit className="h-6 w-6" /></Link> */}
                <button onClick={() => handleEditProduct(_id)} className="btn btn-circle bg-primary border-primary"><FaEdit className="h-6 w-6" /></button>

                {isOpen && <Modal
                    id={id}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    control={control}
                    setControl={setControl}
                ></Modal>}

                <button onClick={() => handleDeleteProduct(_id)} className="btn btn-circle bg-red-600 border-red-600 "><FaTrashAlt className="h-6 w-6" /></button>
            </td>
        </tr>
    );
};

export default SingleToyRow;