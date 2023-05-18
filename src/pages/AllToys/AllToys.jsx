import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useEffect, useState } from "react";

const AllToys = () => {

    const loadedToys = useLoaderData()

    // const [products, setProducts] = useState(loadedToys);

    // const [inputValue, setInputValue] = useState('');

    // useEffect(() => {
    //     const result = products.filter((item) => item.toy_name.includes(inputValue));
    //     setProducts(result);
    // }, [inputValue]);

    const [inputValue, setInputValue] = useState('');
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        setDataToShow(loadedToys);
    }, [loadedToys]);

    useEffect(() => {
        if (inputValue === '') {
            setDataToShow(loadedToys);
        } else {
            const result = loadedToys.filter((item) =>
                item.toy_name.toLowerCase().includes(inputValue.toLowerCase()));
            setDataToShow(result);
        }
    }, [inputValue, loadedToys]);

    return (
        <div className="container mx-auto mt-10">

            <div className="w-2/3 mx-auto flex mb-10">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Enter toy's name"
                    className="input border-primary border-2 w-full" />
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Sub-Category</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {dataToShow.map(product => <ToyRow
                            key={product._id}
                            product={product}
                        ></ToyRow>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;