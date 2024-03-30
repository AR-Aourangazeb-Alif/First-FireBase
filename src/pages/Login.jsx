import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { FaXTwitter } from "react-icons/fa6";

import app from "../firebase/firebase.init";



const Login = () => {

    const auth = getAuth(app);
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


    document.querySelector('html').setAttribute('data-theme', `${localStorage.getItem('theme') === 'true' ? 'sunset' : 'light'}`);



    return (
        <div className="w-[100svw] h-[100svh] flex justify-center items-center">
            <div className="bg-base-300 w-[500px] h-auto rounded-3xl shadow-2xl flex flex-col p-6 pb-14">

                <h1 className="text-2xl font-bold mb-8">Login in or create an account</h1>


                <form action="">
                    <div className="flex items-center gap-1 mb-4">
                        <div className="flex-1">
                            <h3>Email address</h3>
                            <input type="email" name="" id="" placeholder="Enter your email address" className="border border-primary-content rounded-lg py-2.5 px-4 outline-accent w-full" />
                        </div>

                        <div className="flex-1">
                            <h3>Password</h3>
                            <input type="password" name="" id="" placeholder="Enter your password" className="border border-primary-content rounded-lg py-2.5 px-4 outline-accent w-full" />
                        </div>
                    </div>

                    <button className="bg-accent py-4 flex justify-center rounded-xl mb-10 active:scale-95 transition-transform font-medium w-full">Login with email</button>
                </form>


                <div className="flex items-center gap-2 mb-8">
                    <div className="flex-1 border border-primary-content"></div>
                    <h6 className="text-sm">or use one of these options</h6>
                    <div className="flex-1 border border-primary-content"></div>
                </div>

                <div className="flex items-center px-10 justify-center gap-8">

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


            </div>
        </div>
    );
};

export default Login;