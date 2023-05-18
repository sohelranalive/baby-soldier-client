import { Link, useLocation, useNavigate } from "react-router-dom";
import glogo from '../../assets/g-logo.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { userLogIn, googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .then(error => {
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
                    </div>
                    <div className="form-control mt-6">
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