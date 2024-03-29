import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoaderSpinner from "../pages/LoaderSpinner/LoaderSpinner";

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { loading, user } = useContext(AuthContext)

    if (loading) {
        return <LoaderSpinner></LoaderSpinner>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;