import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.init";

const ForgetPassword = () => {
    document.querySelector('html').setAttribute('data-theme', `${localStorage.getItem('theme') === 'true' ? 'sunset' : 'light'}`);


    const resetPassword = e => {
        e.preventDefault();

        const email = e.target.reset.value;
        console.log(email);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please check your email");
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="w-[100svw] h-[100svh] flex justify-center items-center">

            <div className="bg-base-300 w-[500px] h-auto rounded-3xl shadow-2xl flex flex-col p-6">

                <h1 className="text-2xl font-bold mb-8">Reset Password</h1>


                <form className="mb-4" onSubmit={resetPassword}>
                    <input type="email" name="reset" id="reset" placeholder="Enter your email address" className="border border-primary-content rounded-lg py-2.5 px-4 outline-primary w-full mb-8" required />

                    <button className="bg-primary py-4 flex justify-center rounded-xl active:scale-95 transition-transform font-medium w-full text-base-100">Send reset email</button>
                </form>

                <Link
                    to={'/login'}
                    className="text-sm text-primary ml-2">Return to <span className="font-bold">Login</span></Link>

            </div>

        </div>
    );
};

export default ForgetPassword;