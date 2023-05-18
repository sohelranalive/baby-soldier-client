import { Link } from "react-router-dom";
import glogo from '../../assets/g-logo.png'

const Login = () => {
    return (
        <div className="mt-4">
            <h1 className="text-4xl text-center text-primary font-bold uppercase">Please Login</h1>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-2">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                </form>
                <div className=" w-10/12 mx-auto mb-10">
                    <div className="form-control space-y-4">
                        <button className="btn btn-outline hover:bg-primary">
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