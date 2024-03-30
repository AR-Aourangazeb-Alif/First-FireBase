import { Outlet } from "react-router-dom";

const LoginRegister = () => {
    
    document.querySelector('html').setAttribute('data-theme', `${localStorage.getItem('theme') === 'true' ? 'sunset' : 'light'}`);


    return (
        <div className="w-[100svw] h-[100svh] flex justify-center items-center">

            <Outlet></Outlet>
            
        </div>
    );
};

export default LoginRegister;