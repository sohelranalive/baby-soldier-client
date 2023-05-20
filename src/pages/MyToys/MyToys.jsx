import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleToyRow from "./SingleToyRow";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const MyToys = () => {

    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false)
    const [order, setOrder] = useState('')
    const [active, setActive] = useState(null)
    const { user } = useContext(AuthContext);


    const handleAscendingSort = () => {
        setOrder('asc')
        setActive(1)
    }

    const handleDescendingSort = () => {
        setOrder('des')
        setActive(2)
    }

    const url = `http://localhost:5000/myToys?email=${user.email}&sort=${order}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [url, control])

    return (
        <div className="container mx-auto mt-10">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image/Details</th>
                            <th>Sub-Category</th>
                            <th>Toy Name / Des.</th>
                            <th className="flex items-center justify-center space-x-2">
                                <span>Price</span>
                                <span><button
                                    onClick={handleAscendingSort}
                                    className={`btn btn-sm ${active == 1 ? 'btn-primary' : ''}`}><FaArrowDown /></button></span>
                                <span><button
                                    onClick={handleDescendingSort}
                                    className={`btn btn-sm ${active == 2 ? 'btn-primary' : ''}`}><FaArrowUp /></button></span>
                            </th>
                            <th className="text-center">Available Quantity</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {products.map(product => <SingleToyRow
                            key={product._id}
                            product={product}
                            control={control}
                            setControl={setControl}
                        ></SingleToyRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;