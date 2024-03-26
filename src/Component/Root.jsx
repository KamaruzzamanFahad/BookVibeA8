import { Outlet } from "react-router-dom";
import Header from "./Header";
const Root = () => {
    return (
        <div className="px-5 md:px-24 lg:px-24 xl:px-24  mt-5">
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;