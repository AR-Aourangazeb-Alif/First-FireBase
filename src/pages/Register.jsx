import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.init";

const Register = () => {

    const provider = new GoogleAuthProvider();

    const googleButton = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        console.log('Email: ' + e.target.email.value);
        console.log('Password 1: ' + e.target.password1.value);
        console.log('Password 2: ' + e.target.password2.value);
    }

    return (
        <div className="bg-base-300 w-[500px] h-auto rounded-3xl shadow-2xl flex flex-col p-6">

            <h1 className="text-2xl font-bold mb-8">Register Now</h1>


            <form onSubmit={handleRegister}>

                    <input type="email" name="email" id="email" placeholder="Enter your email address" className="border border-primary-content rounded-lg py-2.5 px-4 outline-accent w-full mb-1" />

                <div className="flex items-center gap-1 mb-4">

                        <input type="password" name="password1" id="password1" placeholder="Enter your password" className="border border-primary-content rounded-lg py-2.5 px-4 outline-accent w-full" />

                        <input type="password" name="password2" id="password2" placeholder="Rewrite your password" className="border border-primary-content rounded-lg py-2.5 px-4 outline-accent w-full" />

                </div>

                <button className="bg-accent py-4 flex justify-center rounded-xl mb-10 active:scale-95 transition-transform font-medium w-full">Register with email</button>
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
            to={'/form'}
            className="text-sm text-accent mx-auto">Already Have an account? <span className="font-bold">Login</span></Link>


        </div>
    );
};

export default Register;