import Header from "./Header";
import { useLocation } from 'react-router-dom';

const Book_Detil = () => {
    const location = useLocation();
    const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = location.state;

    return (
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center ">
            <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex justify-center items-center bg-[#0000000f] rounded-2xl py-5 mt-12">
                <img className="w-[90%]" src={image} alt="" />
            </div>
            <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] m-10">
                <h2 className="text-4xl font-bold mt-2 mb-2">{bookName}</h2>
                <p className="font-bold text-md text-[#000000a1] mb-5">By : {author}</p>
                <hr />
                <p className="font-bold text-md text-[#000000a1] mt-2 mb-2">{category}</p>
                <hr />
                <p className="mt-3"><span className="text-sm font-bold text-black">Review : </span>{review}</p>
                <div className="gap-4 flex mt-7 items-center mb-5">
                    <p className="font-bold text-sm text-[#000000] mt-2 mb-2">Tag</p>
                    <p className="tag">#{tags[0]}</p>
                    <p className="tag">#{tags[1]}</p>
                </div>
                <hr />
                <div className="flex mt-4 justify-between w-60">
                    <p>Number of Pages:</p>
                    <p className="font-bold text-black">{totalPages}</p>
                </div>
                <div className="flex mt-4 justify-between w-60">
                    <p>Publisher:</p>
                    <p className="font-bold text-black">{publisher}</p>
                </div>
                <div className="flex mt-4 justify-between w-60">
                    <p>Year of Publishing:</p>
                    <p className="font-bold text-black">{yearOfPublishing}</p>
                </div>
                <div className="flex mt-4 justify-between w-60">
                    <p>Rating:</p>
                    <p className="font-bold text-black">{rating}</p>
                </div>
                <div className="flex gap-3 mt-5">
                    <button className="buttom bg-transparent border-[1px] border-[#929292a1] w-[100px] text-black ">Read</button>
                    <button className="buttom bg-[#51c7d4] text-white px-7">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Book_Detil;