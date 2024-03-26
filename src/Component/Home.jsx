import { NavLink, Navigate , useNavigate } from "react-router-dom";
import '../index.css'
import { FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";



const Home = () => {

    const [books, setbooks] = useState([])

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    const navigate = useNavigate();

    const clickhandle = (item) => {
        navigate("/book_detil",{ state: item })
    }
    function golisted(){
        navigate('/listed-book')
    }

    return (
        <div className="mb-20">
            <div className="flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row p-20 px-5 md:px-24 lg:px-24 xl:px-24 bg-[#0000000a] rounded-xl mt-10 justify-between items-center">
                <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center md:text-left lg:text-left xl:text-left">
                    <h2 className="text-5xl font-bold text-[#070707f9] mb-10 leading-[80px] ">Books to freshen up your bookshelf</h2>
                    <button onClick={golisted} className="buttom bg-[#23BE0A] text-white p-4 px-7">View The List</button>
                </div>
                <div>
                    <img src="pngwing 1.png" alt="" />
                </div>
            </div>

            <h2 className="text-center text-4xl mt-20 mb-10 font-bold">Books</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    books.map((item, i) => (
                        <div onClick={() => clickhandle(item)} key={i} className="border-[1px] border-[#0000001b] p-5 rounded-xl">
                            <div className="flex justify-center items-center bg-[#0000000f] p-10 rounded-xl mb-4">
                                <img src={item.image} alt="" width={'120px'} />
                            </div>
                            <div>
                                <div className="gap-4 flex">
                                    <p className="tag">{item.tags[0]}</p>
                                    <p className="tag">{item.tags[1]}</p>
                                </div>
                                <h2 className="text-2xl font-bold mt-2 mb-2">{item.bookName}</h2>
                                <p className="font-bold text-sm text-[#000000a1] mb-5">By : {item.author}</p>
                                <hr />
                                <div className="flex justify-between mt-4">
                                    <p className="font-bold text-sm text-[#000000a1]">{item.category}</p>
                                    <div className="flex gap-2">
                                        <span className="font-bold text-sm text-[#000000a1]">{item.rating}</span>
                                        <span><FaRegStar />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Home;