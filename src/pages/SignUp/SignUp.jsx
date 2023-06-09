import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {

    const { createUser, google, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser(result.user, name, photo)
                console.log(user)
                navigate(location?.state?.from.pathname || '/')
            })
            .catch(error => console.log(error))

        form.reset()
    }

    const handleGoogle = () => {
        google()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
                navigate(location?.state?.from.pathname || '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <>
            <div className="bg-base-200">
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <div className="text-center ">
                                <h1 className="text-3xl font-bold pb-5">Sign Up</h1>
                            </div>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="photo url" name="photo" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                                <div>
                                    <div className="divider">OR</div>
                                    <p className=" text-center">SignUp With</p>
                                    <div className="flex gap-24 ml-32 mt-7 text-2xl">
                                        <button><p><FaFacebook /></p></button>
                                        <button onClick={handleGoogle}><p><FaGoogle /></p></button>
                                        <button><p><FaTwitter /></p></button>
                                    </div>
                                </div>
                            </form>
                            <p className="my-4 text-center">Already Have an account? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;