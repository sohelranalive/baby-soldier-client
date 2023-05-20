import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const loadedData = useLoaderData()
    const { toy_photo, toy_name, seller_name, seller_email, price, ratings, quantity, description } = loadedData;

    const descriptionLines = description.split(/\r?\n/)

    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="md:flex items-center space-y-4 md:space-y-0">
                <div className="md:w-2/5">
                    <div className="border-2 border-primary rounded-lg p-6">
                        <img src={toy_photo} alt="" className="h-full w-full" />
                    </div>
                </div>
                <div className="md:w-3/5 ps-0 md:ps-6 space-y-4">
                    <div>
                        <h1 className="text-3xl font-semibold mb-2">{toy_name}</h1>
                        <p className="text-2xl">Ratings: {ratings}</p>
                    </div>
                    <div>
                        <p className="mb-2">Price: <span className="text-3xl">${price}</span></p>
                        <p className="">Descriptions: </p>
                        {
                            descriptionLines.map((lines, index) =>
                                <p key={index} className="mb-2 mt-2 text-justify">{lines}</p>)
                        }
                    </div>
                    <div>
                        <h1 className="text-2xl italic font-semibold mb-2">Seller Info</h1>
                        <hr />
                        <p className="mt-2">Seller Name: {seller_name}</p>
                        <p>Seller Email: {seller_email}</p>
                        <p>Available Quantity: {quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;