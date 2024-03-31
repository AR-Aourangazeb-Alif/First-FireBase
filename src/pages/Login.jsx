import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const Login = () => {

    const [success, setSuccess] = useState('');
    const [handleError, setHandleError] = useState('');

    const [showPassword, setShowPassword] = useState(false);


    const googleProvider = new GoogleAuthProvider();


    const googleButton = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        //resetting error and success msg
        setSuccess('');
        setHandleError('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Successfully Logged In');
            })
            .catch(error => {
                console.log(error.message);

                if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                    setHandleError('Incorrect email or password');
                } else {
                    setHandleError('Something went wrong: ' + error.message);
                }
            })
    }


    return (
        <div className="bg-base-300 w-[500px] h-auto rounded-3xl shadow-2xl flex flex-col p-6">

            <h1 className="text-2xl font-bold mb-8">Login in your account</h1>


            <form onSubmit={handleLogin}>
                <div className="flex items-center gap-2 mb-6">
                    <div className="flex-1">
                        <input type="email" name="email" id="email" placeholder="Enter your email address" className="border border-primary-content rounded-lg py-2.5 px-4 outline-primary w-full" required />
                    </div>

                    <div className="flex-1 relative">
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="border border-primary-content rounded-lg py-2.5 pl-4 outline-primary w-full pr-8" required />

                        <span onClick={() => setShowPassword(!showPassword)} className="text-xl absolute top-3 right-2 cursor-pointer text-primary">
                            {
                                showPassword ? <IoIosEye /> : <IoIosEyeOff />
                            }
                        </span>
                    </div>
                </div>

                <div className="w-full h-fit mb-10 relative">
                    <p className={`${success ? 'text-green-400' : handleError ? 'text-red-400' : ''} absolute -top-5 left-2 text-sm font-medium`}>
                        {success ? success : handleError ? handleError : ''}
                    </p>

                    <button className="bg-primary py-4 flex justify-center rounded-xl active:scale-95 transition-transform font-medium w-full text-base-100">Login with email</button>

                </div>
            </form>


            <div className="flex items-center gap-2 mb-8">
                <div className="flex-1 border border-primary-content"></div>
                <h6 className="text-sm">or use one of these options</h6>
                <div className="flex-1 border border-primary-content"></div>
            </div>

            <div className="flex items-center px-10 justify-center gap-8 mb-14">

                <button className="p-5 border text-3xl border-primary-content rounded-lg shadow-lg active:scale-95 transition-transform" onClick={googleButton}>
                    <FcGoogle />
                </button>

                <button className={`p-5 border text-3xl border-primary-content rounded-lg shadow-lg active:scale-95 transition-transform ${localStorage.getItem('theme') === 'true' ? 'text-[#F1F1F1]' : 'text-[#000000]'}`}>
                    <FaXTwitter />
                </button>

                <button className={`p-5 border text-3xl border-primary-content rounded-lg shadow-lg active:scale-95 transition-transform ${localStorage.getItem('theme') === 'true' ? 'text-[#F7F7F7]' : 'text-[#161414]'}`}>
                    <FaGithub />
                </button>


            </div>


            <Link
                to={'register'}
                className="text-sm text-primary mx-auto">Don&apos;t Have an account? <span className="font-bold">Register</span></Link>


        </div>
    );
};

export default Login;