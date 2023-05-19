import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleToyRow from "./SingleToyRow";

const MyToys = () => {

    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false)

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myToys?email=${user.email}`

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
                            <th>Image</th>
                            <th>Sub-Category</th>
                            <th>Toy Name / Details</th>
                            <th className="text-center">Price</th>
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