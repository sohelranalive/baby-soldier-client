import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import animation_404 from "../../assets/125075-page-not-found.json";

const ErrorPage = () => {

    const { error } = useRouteError()


    return (
        <div className='h-[100vh] w-full bg-black text-white'>

            <div className='h-4/6 w-full'>
                <div className='h-full w-1/2 mx-auto'>
                    <Lottie animationData={animation_404} className='h-full w-full' />
                </div>
            </div>

            <div className='text-center'>
                <h1 className='text-3xl font-bold text-center'>{error?.message}</h1>
                <br />
                <Link className='btn btn-primary' to='/'>Back to homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;