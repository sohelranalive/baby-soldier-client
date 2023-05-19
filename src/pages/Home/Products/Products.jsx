import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import SingleProductCard from './SingleProductCard';

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
        <div className="mt-10 px-4">
            <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">Our Products</h1>
            <p className='text-3xl text-center text-primary font-semibold mt-4'>Buy our toy guns according to you kids age</p>
            <br />

            <div>
                <div className="mx-auto">
                    <div className="md:flex border-b border-gray-300 justify-center">
                        <button
                            className={`mx-auto block md:m-0 md:inline py-2 px-4 text-gray-600 hover:text-gray-800 ${activeTab === 1 ? 'border-b-4 border-primary' : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            2 - 6 Years
                        </button>
                        <button
                            className={`mx-auto block md:m-0 md:inline py-2 px-4 text-gray-600 hover:text-gray-800 ${activeTab === 2 ? 'border-b-4 border-primary' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            7 - 10 Years
                        </button>
                        <button
                            className={`mx-auto block md:m-0 md:inline py-2 px-4 text-gray-600 hover:text-gray-800 ${activeTab === 3 ? 'border-b-4 border-primary' : ''}`}
                            onClick={() => handleTabClick(3)}
                        >
                            11 Years - Above
                        </button>
                    </div>

                    <div>
                        {activeTab === 1 && <div className="py-6 px-2 bg-primary bg-opacity-25 rounded-b-md">
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center'>
                                {
                                    products.map(product =>
                                        <SingleProductCard
                                            key={product._id}
                                            product={product}>
                                        </SingleProductCard>)
                                }
                            </div>
                        </div>}
                        {activeTab === 2 && <div className="py-6 px-2 bg-primary bg-opacity-25 rounded-b-md">
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center'>
                                {
                                    products.map(product =>
                                        <SingleProductCard
                                            key={product._id}
                                            product={product}>
                                        </SingleProductCard>)
                                }
                            </div>
                        </div>}
                        {activeTab === 3 && <div className="py-6 px-2 bg-primary bg-opacity-25 rounded-b-md">
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center'>
                                {
                                    products.map(product =>
                                        <SingleProductCard
                                            key={product._id}
                                            product={product}>
                                        </SingleProductCard>)
                                }
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;