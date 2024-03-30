import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";
import auth from "../firebase/firebase.init";



const Login = () => {

    const provider = new GoogleAuthProvider();


    const googleButton = () => {
        signInWithPopup(auth, provider)
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
        console.log('Email: ' + e.target.email.value);
        console.log('Password: ' + e.target.password.value);
    }


    return (
        <div className="bg-base-300 w-[500px] h-auto rounded-3xl shadow-2xl flex flex-col p-6">

            <h1 className="text-2xl font-bold mb-8">Login in your account</h1>


            <form onSubmit={handleLogin}>
                <div className="flex items-center gap-1 mb-4">
                    <input type="email" name="email" id="email" placeholder="Enter your email address" className="border border-primary-content rounded-lg py-2.5 px-4 outline-accent w-full" />

                    <input type="password" name="password" id="password" placeholder="Enter your password" className="border border-primary-content rounded-lg py-2.5 px-4 outline-accent w-full" />
                </div>

                <button className="bg-accent py-4 flex justify-center rounded-xl mb-10 active:scale-95 transition-transform font-medium w-full">Login with email</button>
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
                className="text-sm text-accent mx-auto">Don&apos;t Have an account? <span className="font-bold">Register</span></Link>


        </div>
    );
};

export default Login;