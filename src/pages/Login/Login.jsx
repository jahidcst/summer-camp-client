import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter, FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }


    const { signIn, google } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location?.state?.from.pathname || '/')
            })
            .catch(error => console.log(error))

        form.reset();
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
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
        <div>

            <Helmet>
                <title>Yogastic | Login</title>
            </Helmet>


            <div className="  bg-base-200" >
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <div className="text-center ">
                                <h1 className="text-3xl font-bold pb-5">Login</h1>
                            </div>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <div className="flex border rounded-md border-slate-600"> 
                                        <input type={passwordType} name="password" onChange={handlePasswordChange} value={passwordInput} placeholder="password"  className="input w-full"  />
                                        <div className="">
                                        <button className="input-md " onClick={togglePassword}>
                                                {passwordType === "password" ? <FaRegEye></FaRegEye>  : <FaRegEyeSlash></FaRegEyeSlash>  }
                                            </button>
                                        </div>
                                        </div>

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <div>
                                    <div className="divider">OR</div>
                                    <p className=" text-center">Login With</p>
                                    <div className="flex gap-24 ml-16 mt-7 text-2xl">
                                        <button><p><FaFacebook /></p></button>
                                        <button onClick={handleGoogle}><p><FaGoogle /></p></button>
                                        <button><p><FaTwitter /></p></button>
                                    </div>
                                </div>
                            </form>
                            <p className="my-4 text-center">New to Yogastic? <Link className="text-blue-600 font-bold" to='/signup'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;