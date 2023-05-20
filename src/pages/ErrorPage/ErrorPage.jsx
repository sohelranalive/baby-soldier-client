import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const { error, status } = useRouteError()

    return (
        <div className='error-page'>



            <h1>{status}</h1>
            <h1>Opps !!!</h1>
            <h1>{error?.message}</h1>
            <br />
            <Link to='/'>Back to homepage</Link>
        </div>
    );
};

export default ErrorPage;