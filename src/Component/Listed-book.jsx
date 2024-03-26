import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineGroup } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";




const LIstedBook = () => {
    const [tabone, settabone] = useState('tab tab-active')
    const [tabtwo, settabtwo] = useState('tab')
    const [open, setopen] = useState('one')

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
    return (
        <div>
            <h1 className='text-center p-7 rounded-2xl text-2xl font-bold text-black mt-5 bg-[#0000000d]'>Books</h1>
            <div className='flex justify-center items-center mt-7'>
                <select className=" bg-[#23BE0A] text-white text-md select select-bordered w-32 max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>

            <div>
                <div role="tablist" className="tabs tabs-lifted flex w-full">
                    <a onClick={() => tabhandle('one')} role="tab" className={tabone}>Tab 1</a>
                    <a onClick={() => tabhandle('two')} role="tab" className={tabtwo}>Tab 2</a>
                </div>
            </div>

            {/* tab one */}
            <div className={open == "one" ? "flex" : 'hidden'}>
                <div className='flex gap-5 border-[1px] border-[#20202023] rounded-2xl px-5 py-2 w-full mt-5 flex-col md:flex-row lg:flex-row xl:flex-row '>
                    <div className="flex justify-center items-center bg-[#0000000f] p-10 rounded-xl mb-4 mt-3">
                        <img src="lord-removebg-preview.png" alt="" width={'120px'} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mt-2 mb-2">grefgre tf regrdt g</h2>
                        <p className="font-bold text-sm text-[#000000a1] mb-5">By : fdgdf</p>
                        <div className="gap-4 flex mt-7 items-center mb-5">
                            <p className="font-bold text-sm text-[#000000] mt-2 mb-2">Tag</p>
                            <p className="tag">#yhthjy</p>
                            <p className="tag">#rgr</p>
                            <span><CiLocationOn className='inline-block mr-2' />
                                Year of Publishing: 1924</span>
                        </div>
                        <div className='mb-3'>
                            <span className='mr-5'><MdOutlineGroup className='inline-block mr-2' />
                                Publisher: Scribner</span>
                            <span><MdOutlineContactPage className='inline-block mr-2' /> Page 192</span>
                        </div>
                        <hr />
                        <div className='flex mt-3 gap-4'>
                            <p className='bg-[#328eff20] p-2 px-5 rounded-full text-[#328EFF]'>Category: Classic</p>
                            <p className='bg-[#ffad3335] p-2 px-5 rounded-full text-[#FFAC33]'>Rating: 4.5</p>
                            <p className='bg-[#23BE0A] p-2 px-5 rounded-full text-white'>View Details</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* tab two */}
            <div className={open == "two" ? "flex" : 'hidden'}>
                two
            </div>
        </div>
    );
};

export default LIstedBook;