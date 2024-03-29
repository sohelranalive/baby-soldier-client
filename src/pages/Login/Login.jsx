import { Link, useLocation, useNavigate } from "react-router-dom";
import glogo from '../../assets/g-logo.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const notify = () => toast.success('User Successfully Logged In', {
        position: "top-right",
        autoClose: 1000,
    });

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('')
    const { userLogIn, googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogIn = (event) => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                notify()
            })
            .catch(error => {
                console.log(error.code);
                if (error.code === 'auth/user-not-found') {
                    setError('User Not Found')
                }
                if (error.code === 'auth/wrong-password') {
                    setError('Incorrect Password')
                }
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                notify()
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="mt-4">
            <h1 className="text-4xl text-center text-primary font-bold uppercase">Please Login</h1>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-2">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p className="text-red-500 font-bold italic">{error}</p>
                        </label>
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                    <div className="divider">OR</div>
                </form>
                <div className=" w-10/12 mx-auto mb-10">
                    <div className="form-control space-y-4">
                        <button onClick={handleGoogleLogIn} className="btn btn-outline hover:bg-primary">
                            <img src={glogo} alt="" className="h-8 w-8" />
                            <span className="ml-2">Continue with google</span>
                        </button>
                        <p>Net to this website? Please <span className="text-primary underline"><Link to='/register'>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;