import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const Register = () => {

    const [handleError, setHandleError] = useState('');
    const [handleSuccess, setHandleSuccess] = useState('');


    const [showPassword, setShowPassword] = useState(false);

    //google Authentication
    const googleProvider = new GoogleAuthProvider();

    const googleButton = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    // Create user with email and password

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password1 = e.target.password1.value;
        const password2 = e.target.password2.value;
        const password = password1 === password2 ? password1 : null;

        //clearing error
        setHandleError('');
        setHandleSuccess('');

        if (!password) {
            setHandleError('Passwords do not match');
            return;
        } else if(!e.target.terms.checked){
            setHandleError('Accept our terms and conditions');
            return;
        }
        else if (password.length < 6) {
            setHandleError('Password must be at least 6 characters or longer');
            return;
        } else if (!/[a-zA-Z]/.test(password)) {
            setHandleError('Password must include alphabets');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setHandleError('Password must include uppercase letters');
            return;
        } else if (!/[a-z]/.test(password)) {
            setHandleError('Password must include lowercase letters');
            return;
        } else if (!/\d/.test(password)) {
            setHandleError('Password must include numbers');
            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setHandleError('Password must include atleast one symbol [!@#$%^&*(),.?":{}|<>]');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setHandleSuccess('User registered successfully !')
            })
            .catch(error => {
                console.log(error);

                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setHandleError('Email already in use ! ! !');
                }else{
                    handleError(error.message);
                }
            })


    }

    return (
        <div className="bg-base-300 w-[500px] h-auto rounded-3xl shadow-2xl flex flex-col p-6">

            <h1 className="text-2xl font-bold mb-8">Register Now</h1>


            <form onSubmit={handleRegister}>

                <input type="email" name="email" id="email" placeholder="Enter your email address" className="border border-primary-content rounded-lg py-2.5 px-4 outline-primary w-full mb-2" required />

                <div className="flex items-center gap-2 mb-2">

                    <div className="flex-1 h-fit relative">
                        <input type={showPassword ? "text" : "password"} name="password1" id="password1" placeholder="Enter your password" className="border border-primary-content rounded-lg py-2.5 pl-4 pr-8 outline-primary w-full" required />

                        <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute top-3 right-2 text-xl text-primary">

                            {showPassword ? <IoIosEye /> : <IoIosEyeOff />}

                        </span>
                    </div>

                    <div className="flex-1 h-fit">
                        <input type="password" name="password2" id="password2" placeholder="Confirm your password" className="border border-primary-content rounded-lg py-2.5 px-4 outline-primary w-full" required />
                    </div>


                </div>

                <div className="mb-6 flex items-center gap-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms" className="text-info"><a href="">Accept terms and conditions</a></label>
                </div>

                <div className="relative">
                    <p className={`${handleError ? 'text-red-400' : 'text-green-400'} absolute -top-5 text-sm left-2 font-medium`}>
                        {handleError ? handleError : handleSuccess ? handleSuccess : ''}
                    </p>

                    <button className="bg-primary py-4 flex justify-center rounded-xl mb-10 active:scale-95 transition-transform font-medium w-full text-base-100">Register with email</button>
                </div>
            </form>


            <div className="flex items-center gap-2 mb-8">
                <div className="flex-1 border border-primary-content"></div>
                <h6 className="text-sm text-base-content">or use one of these options</h6>
                <div className="flex-1 border border-primary-content"></div>
            </div>

            <div className="flex items-center px-10 justify-center gap-8 mb-10">

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
                className="text-sm text-primary mx-auto">Already Have an account? <span className="font-bold">Login</span>
            </Link>


        </div>
    );
};

export default Register;