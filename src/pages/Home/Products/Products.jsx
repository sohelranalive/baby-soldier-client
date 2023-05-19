import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';

const Products = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [products, setProducts] = useState([])


    useEffect(() => {
        let url = '';
        switch (activeTab) {
            case 1:
                url = 'http://localhost:5000/allToys?category=2to6';
                break;
            case 2:
                url = 'http://localhost:5000/allToys?category=7to10';
                break;
            case 3:
                url = 'http://localhost:5000/allToys?category=11toa';
                break;
            default:
                break;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })

    }, [activeTab])


    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="border mt-20">
            <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">Our Products</h1>
            <p className='text-2xl'>Shop According to you kids age</p>
            <br />

            <div>
                <div className="mx-auto">
                    <div className="flex border-b border-gray-300 justify-center">
                        <button
                            className={`py-2 px-4 text-gray-600 hover:text-gray-800 ${activeTab === 1 ? 'border-b-2 border-indigo-500' : ''
                                }`}
                            onClick={() => handleTabClick(1)}
                        >
                            Age: 2 - 6 Years
                        </button>
                        <button
                            className={`py-2 px-4 text-gray-600 hover:text-gray-800 ${activeTab === 2 ? 'border-b-2 border-indigo-500' : ''
                                }`}
                            onClick={() => handleTabClick(2)}
                        >
                            Age: 7 - 10 Years
                        </button>
                        <button
                            className={`py-2 px-4 text-gray-600 hover:text-gray-800 ${activeTab === 3 ? 'border-b-2 border-indigo-500' : ''
                                }`}
                            onClick={() => handleTabClick(3)}
                        >
                            Age: 11 Years - Above
                        </button>
                    </div>

                    <div className="mt-4">
                        {activeTab === 1 && <div className="bg-gray-200 p-4">
                            {
                                products.map(product =>
                                    <h1 key={product._id}>{product.toy_name}</h1>)
                            }
                        </div>}
                        {activeTab === 2 && <div className="bg-gray-200 p-4">
                            {
                                products.map(product =>
                                    <h1 key={product._id}>{product.toy_name}</h1>)
                            }
                        </div>}
                        {activeTab === 3 && <div className="bg-gray-200 p-4">
                            {
                                products.map(product =>
                                    <h1 key={product._id}>{product.toy_name}</h1>)
                            }
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;