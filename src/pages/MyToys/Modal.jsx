import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Modal = ({ id, isOpen, setIsOpen, control, setControl }) => {

    const notify = () => toast.success('Information updated successfully', {
        position: "top-center",
        autoClose: 1000,
    });


    const [product, setProduct] = useState([])

    const url = `https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/toyDetails/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [url])


    const handleInfoUpdate = (event) => {
        event.preventDefault()
        const form = event.target;

        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value

        const updatedToyInfo = { price, quantity, description }

        fetch(`https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/myToys/${product._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setControl(!control)
                    notify()
                }
            })

        setIsOpen(!isOpen)
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <div className="relative bg-white rounded-lg w-8/12">
                <div className="p-4">
                    <h2 className="text-lg whitespace-ellipsis overflow-hidden font-bold mb-2">{product.toy_name}</h2>
                    <h1 className="text-2xl italic font-bold">Information Update</h1>
                    <hr />
                    <br />
                    <div className="text-gray-700">

                        <form onSubmit={handleInfoUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' defaultValue={product.price} className="input input-bordered" required min="1" step="0.01" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="number" required name='quantity' defaultValue={product.quantity} className="input input-bordered" />
                            </div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='description' required defaultValue={product.description} className="textarea textarea-bordered" ></textarea>
                            </div>
                            <div className="mb-5 space-x-2">
                                <input className="btn btn-primary" type="submit" value="Update" />
                                <button className="btn btn-warning" onClick={() => setIsOpen(!isOpen)}>
                                    Close
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
