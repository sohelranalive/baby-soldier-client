import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {

    const [products, setProducts] = useState([]);

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myToys?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [url])

    return (
        <div>
            {products.map(product => <h1 key={product._id}>{product.toy_name}, Category: {product.category}</h1>)}
        </div>
    );
};

export default MyToys;