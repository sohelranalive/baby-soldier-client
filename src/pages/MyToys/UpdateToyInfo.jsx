import { useLoaderData } from "react-router-dom";

const UpdateToyInfo = () => {

    const loadedData = useLoaderData()
    console.log(loadedData);

    //const handleEditProduct = (id) => {
    //     fetch(`https://b7a11-toy-marketplace-server-side-sohelranalive.vercel.app/myToys/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedInfo)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {
    //                 setControl(!control)
    //             }
    //         })
    // }



    return (
        <div>

        </div>
    );
};

export default UpdateToyInfo;