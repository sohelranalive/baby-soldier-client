import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {

    const { user } = useContext(AuthContext)

    const notify = () => toast.success('Your product has added successfully', {
        position: "top-center",
        autoClose: 1000,
    });

    const handleToyAdd = (event) => {
        event.preventDefault()

        const form = event.target;
        const toy_photo = form.toy_photo.value
        const toy_name = form.toy_name.value
        const seller_name = form.seller_name.value
        const seller_email = form.seller_email.value
        const category = form.category.value
        const price = form.price.value
        const ratings = form.ratings.value
        const quantity = form.quantity.value
        const description = form.description.value

        const toyInfo = { toy_photo, toy_name, seller_name, seller_email, category, price, ratings, quantity, description }

        fetch('https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notify()
                    form.reset()
                }
            })

    }


    return (
        // <div className="container mx-auto mt-5">
        //     <h1 className="text-4xl text-center text-primary font-bold uppercase">Add a toy</h1>
        //     <form onSubmit={handleToyAdd}>
        //         <div className="card-body m-8 border bg-base-100 rounded-lg grid grid-cols-1 md:grid-cols-2">
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Toy Picture URL</span>
        //                 </label>
        //                 <input type="url" name='toy_photo' placeholder="Toy's picture@url" className="input input-bordered" required />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Toy Name</span>
        //                 </label>
        //                 <input type="text" name='toy_name' placeholder="Toy Name" className="input input-bordered" required />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Seller Name</span>
        //                 </label>
        //                 <input type="text" readOnly name='seller_name' defaultValue={user?.displayName} className="input input-bordered" />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Seller Email</span>
        //                 </label>
        //                 <input type="email" readOnly name='seller_email' defaultValue={user?.email} className="input input-bordered" />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Select Category | Who can play? (According to Age)</span>
        //                 </label>
        //                 <div className="flex space-x-3 items-center">
        //                     <input type="radio" name="category" value='2to6' defaultChecked className="radio" /><span>2 to 6 years</span>
        //                     <input type="radio" name="category" value='7to10' className="radio" /><span>7 to 10</span>
        //                     <input type="radio" name="category" value='11toa' className="radio" />
        //                     <span>11 to Above</span>
        //                 </div>
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Price</span>
        //                 </label>
        //                 <input type="number" name='price' placeholder="$-" className="input input-bordered" required min="1" step="0.01" />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Ratings</span>
        //                 </label>
        //                 <input type="number" required name='ratings' placeholder="1 to 5" className="input input-bordered" min="1" max="5" step="0.1" />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Available Quantity</span>
        //                 </label>
        //                 <input type="number" required name='quantity' placeholder="100/200/300/..." className="input input-bordered" />
        //             </div>
        //             <div className="form-control col-span-2 mb-5">
        //                 <label className="label">
        //                     <span className="label-text">Description</span>
        //                 </label>
        //                 <textarea name='description' required placeholder="Details Description" className="textarea textarea-bordered" ></textarea>
        //             </div>
        //             <div className="form-control col-span-2">
        //                 <input type="submit" className="btn btn-primary btn-block" value="Add Toy" />
        //             </div>
        //         </div>
        //     </form>
        //     <ToastContainer />
        // </div>



        <div className="container mx-auto mt-5">
            <ToastContainer />
            <h1 className="text-4xl text-center text-primary font-bold uppercase">Add a toy</h1>

            <form onSubmit={handleToyAdd}>

                <div className="card-body m-8 border bg-base-100 rounded-lg grid grid-cols-1 md:grid-cols-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Picture URL</span>
                        </label>
                        <input type="url" name='toy_photo' placeholder="Toy's picture@url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toy_name' placeholder="Toy Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" readOnly name='seller_name' defaultValue={user?.displayName} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" readOnly name='seller_email' defaultValue={user?.email} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Category | Who can play? (According to Age)</span>
                        </label>
                        <div className="flex space-x-3 items-center">
                            <input type="radio" name="category" value='2to6' defaultChecked className="radio" /><span>2 to 6 years</span>
                            <input type="radio" name="category" value='7to10' className="radio" /><span>7 to 10</span>
                            <input type="radio" name="category" value='11toa' className="radio" />
                            <span>11 to Above</span>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="$-" className="input input-bordered" required min="1" step="0.01" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="number" required name='ratings' placeholder="1 to 5" className="input input-bordered" min="1" max="5" step="0.1" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" required name='quantity' placeholder="100/200/300/..." className="input input-bordered" />
                    </div>

                    <div className="form-control col-span-1 md:col-span-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' required placeholder="Details Description" className="textarea textarea-bordered" ></textarea>
                    </div>

                    <div className="form-control col-span-1 md:col-span-2 mt-4">
                        <input type="submit" className="btn btn-primary btn-block" value="Add Toy" />
                    </div>

                </div>
            </form>

        </div>
    );
};

export default AddToy;