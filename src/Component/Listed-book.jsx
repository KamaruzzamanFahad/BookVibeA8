import React, { useEffect, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineGroup } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { useNavigate } from 'react-router-dom';





const LIstedBook = () => {
    const [tabone, settabone] = useState('tab tab-active')
    const [tabtwo, settabtwo] = useState('tab')
    const [open, setopen] = useState('one')
    const [readbook, setreadbook] = useState([])
    const [wishbook, setwishbook] = useState([])

    function tabhandle(handle) {
        if (handle == 'one') {
            settabone('tab tab-active')
            settabtwo('tab')
            setopen('one')
        } else {
            settabtwo('tab tab-active')
            settabone('tab')
            setopen('two')

        }
    }




    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => {
                const readlist = JSON.parse(localStorage.getItem('readdata'))
                if (readlist) {
                    const readbook = data.filter(data => readlist.includes(data.bookId))
                    setreadbook(readbook)
                    setData(readbook)
                }

                const wishlist = JSON.parse(localStorage.getItem('wishdata'))
                if (wishlist) {
                    const wishbook = data.filter(data => wishlist.includes(data.bookId))
                    setwishbook(wishbook)
                    setwishsort(wishbook);
                }
            })
    }, [])
    const navigate = useNavigate();
    const clickhandle = (item) => {
        console.log(item)
        navigate("/book_detil", { state: item })
    }


    
    
    


    const [sortData, setData] = useState([])
    const [wishsort, setwishsort] = useState([])

    const sortByrating = () => {
        const sortedData = [...readbook].sort((a, b) => b.rating - a.rating);
        setData(sortedData);
        

        const wishsortdata = [...wishbook].sort((a, b) => b.rating - a.rating);
        setwishsort(wishsortdata);
      };

      const sortBypages = () => {
        const sortedData = [...readbook].sort((a, b) => b.totalPages - a.totalPages);
        setData(sortedData);
        
        
        const wishsortdata = [...wishbook].sort((a, b) => b.totalPages - a.totalPages);
        setwishsort(wishsortdata);
      };

      const sortByyear = () => {
        const sortedData = [...readbook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setData(sortedData);

        const wishsortdata = [...wishbook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setwishsort(wishsortdata);
      };

    //   const sortBy = () => {
    //     setData(readbook);
    //   };

    

    const selecthandel = (event)=>{
        const selectitem =event.target.value;
        if(selectitem == "Sort By"){
            sortBy();
        }
        else if(selectitem == "Rating"){
            sortByrating();
        }
        else if(selectitem == "Number of pages"){
            sortBypages();
        }
        else if(selectitem == "Publisher year"){
            sortByyear();
        }
    }


    console.log(sortData)
    return (
        <div>
            <h1 className='text-center p-7 rounded-2xl text-2xl font-bold text-black mt-5 bg-[#0000000d]'>Books</h1>
            <div className='flex justify-center items-center mt-7 mb-5'>
                <select onChange={selecthandel} className=" bg-[#23BE0A] text-white text-md select select-bordered w-32 max-w-xs">
                    <option className='bg-[#919191]' disabled selected>Sort By</option>
                    <option className='bg-[#919191]'>Rating</option>
                    <option className='bg-[#919191]'>Number of pages</option>
                    <option className='bg-[#919191]'>Publisher year</option>
                </select>
            </div>

            <div>
                <div role="tablist" className="tabs tabs-lifted flex w-full">
                    <a onClick={() => tabhandle('one')} role="tab" className={tabone}>Read Books</a>
                    <a onClick={() => tabhandle('two')} role="tab" className={tabtwo}>Wishlist Books</a>
                </div>
            </div>

            {/* tab one */}
            <div className={open == "one" ? "flex flex-col" : 'hidden'}>
                {
                    sortData.map((item, i) => (
                        <div className='flex gap-5 border-[1px] border-[#20202023] rounded-2xl px-5 py-2 w-full mt-5 flex-col md:flex-row lg:flex-row xl:flex-row '>
                            <div className="flex justify-center items-center bg-[#0000000f] p-10 rounded-xl mb-4 mt-3">
                                <img src={item.image} alt="" width={'120px'} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-2 mb-2">{item.bookName}</h2>
                                <p className="font-bold text-sm text-[#000000a1] mb-5">By : {item.author}</p>
                                <div className="gap-4 flex mt-7 items-center mb-5">
                                    <p className="font-bold text-sm text-[#000000] mt-2 mb-2">Tag</p>
                                    <p className="tag">#{item.tags[0]}</p>
                                    <p className="tag">#{item.tags[1]}</p>
                                    <span><CiLocationOn className='inline-block mr-2' />
                                        Year of Publishing: {item.yearOfPublishing}</span>
                                </div>
                                <div className='mb-3'>
                                    <span className='mr-5'><MdOutlineGroup className='inline-block mr-2' />
                                        Publisher: {item.publisher}</span>
                                    <span><MdOutlineContactPage className='inline-block mr-2' /> Page {item.totalPages}</span>
                                </div>
                                <hr />
                                <div className='flex mt-3 gap-4'>
                                    <p className='bg-[#328eff20] p-2 px-5 rounded-full text-[#328EFF]'>Category: {item.category}</p>
                                    <p className='bg-[#ffad3335] p-2 px-5 rounded-full text-[#FFAC33]'>Rating: {item.rating}</p>
                                    <button onClick={() => clickhandle(item)} className='bg-[#23BE0A] p-2 px-5 rounded-full buttom text-white'>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



            {/* tab two */}
            <div className={open == "two" ? "flex flex-col" : 'hidden'}>
                {
                    wishsort.map((item, i) => (
                        <div className='flex gap-5 border-[1px] border-[#20202023] rounded-2xl px-5 py-2 w-full mt-5 flex-col md:flex-row lg:flex-row xl:flex-row '>
                            <div className="flex justify-center items-center bg-[#0000000f] p-10 rounded-xl mb-4 mt-3">
                                <img src={item.image} alt="" width={'120px'} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-2 mb-2">{item.bookName}</h2>
                                <p className="font-bold text-sm text-[#000000a1] mb-5">By : {item.author}</p>
                                <div className="gap-4 flex mt-7 items-center mb-5">
                                    <p className="font-bold text-sm text-[#000000] mt-2 mb-2">Tag</p>
                                    <p className="tag">#{item.tags[0]}</p>
                                    <p className="tag">#{item.tags[1]}</p>
                                    <span><CiLocationOn className='inline-block mr-2' />
                                        Year of Publishing: {item.yearOfPublishing}</span>
                                </div>
                                <div className='mb-3'>
                                    <span className='mr-5'><MdOutlineGroup className='inline-block mr-2' />
                                        Publisher: {item.publisher}</span>
                                    <span><MdOutlineContactPage className='inline-block mr-2' /> Page {item.totalPages}</span>
                                </div>
                                <hr />
                                <div className='flex mt-3 gap-4'>
                                    <p className='bg-[#328eff20] p-2 px-5 rounded-full text-[#328EFF]'>Category: {item.category}</p>
                                    <p className='bg-[#ffad3335] p-2 px-5 rounded-full text-[#FFAC33]'>Rating: {item.rating}</p>
                                    <button onClick={() => clickhandle(item)} className='bg-[#23BE0A] p-2 px-5 rounded-full buttom text-white'>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LIstedBook;