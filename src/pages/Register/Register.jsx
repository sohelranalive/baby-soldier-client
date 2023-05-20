import { Link, useNavigate } from 'react-router-dom';
import glogo from '../../assets/g-logo.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const notify = () => toast.success('Registration successful, please login', {
        position: "top-right",
        autoClose: 1000,
    });

    const { createUser, userProfileUpdate, userLogOut } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleRegistration = (event) => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const displayName = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be 6 character long !')
            return;
        }

        createUser(email, password)
            .then(result => {
                userProfileUpdate(displayName, photo)
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        console.log(error.message);
                        // ...
                    });
                const createdUser = result.user;
                console.log(createdUser);
                userLogOut()
                notify()
                navigate('/login')
            })
            .catch(error => {
                console.log(error.code);
                if (error.code == 'auth/email-already-in-use') {
                    setError('Enter a new email, this email already in use')
                }
            })
    }

    return (
        <div className="mt-4 container mx-auto">
            <h1 className="text-4xl text-center text-primary font-bold uppercase">Please Register here</h1>
            <div className="card w-full shadow-2xl bg-base-100 mx-auto mt-2">
                <form onSubmit={handleRegistration}>
                    <div className="card-body grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Please enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="Please enter url of your photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="Please enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <p className="text-red-500 font-bold italic">{error}</p>
                            </label>
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                        <div className="divider col-span-2">OR</div>
                    </div>
                </form>
                <ToastContainer />
                <div className=" w-2/6 mx-auto mb-10">
                    <div className="form-control space-y-4">
                        <button className="btn btn-outline hover:bg-primary">
                            <img src={glogo} alt="" className="h-8 w-8" />
                            <span className="ml-2">Continue with google</span>
                        </button>
                        <p>Already have an account? Please <span className="text-primary underline"><Link to='/login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;