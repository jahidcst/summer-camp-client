import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";





const SignUp = () => {

    const { reset, register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, google, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const onSubmit = data => {

        createUser(data.email, data.password,)
            .then(result => {
                const user = result.user;
                updateUser(result.user, data.name, data.photo)
                console.log(user)
                navigate(location?.state?.from.pathname || '/')
            })
            
            .catch(error => console.log(error))
            reset();
        
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

            <Helmet>
                <title>Yogastic | Sign Up</title>
            </Helmet>




            <div className="bg-base-200">
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <div className="text-center ">
                                <h1 className="text-3xl font-bold pb-5">Sign Up</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered" />
                                    {errors.name && <span className="text-error">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} placeholder="photo url" name="photo" className="input input-bordered" />
                                    {errors.name && <span className="text-error">Photo is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text"  {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
                                    {errors.name && <span className="text-error">Email is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-error">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-error">Password must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-error">Password must have one uppercase, one lowercase and one spacial character</p>}

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