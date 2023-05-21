import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useEffect, useState } from "react";

const AllToys = () => {

    const loadedToys = useLoaderData()

    const [inputValue, setInputValue] = useState('');
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        if (inputValue === '') {
            setDataToShow(loadedToys)
        }
        fetch(`https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/searchToyByName/${inputValue}`)
            .then(res => res.json())
            .then(data => {
                setDataToShow(data)
            })
    }, [loadedToys, inputValue])


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
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Sub-Category</th>
                            <th>Toy Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Available Quantity</th>
                            <th className="text-center">Details</th>
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