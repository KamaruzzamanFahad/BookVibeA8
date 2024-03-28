import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    const clickhandle = () => {
        navigate("/")
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <img src="errorrr.jpg" alt="" />
            <h1 className="text-5xl font-bold text-center">404 - PAGE NOT FOUND</h1>
            <p className="mt-4 text-center">The page you are looking for might have been removed<br></br> had its name changed or is temporarily unavailable.</p>
            <button onClick={clickhandle} className="rounded-full bg-[#1f11b8] text-white px-7 mt-4">GO TO HOMEPAGE</button>
        </div>
    );
};

export default ErrorPage;