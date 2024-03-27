import React from 'react';

const Book_swapping = () => {
    return (
        <div>
            <h1 className='text-center p-7 rounded-2xl text-3xl font-bold text-black mt-5'>Book Swapping</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <img src="surve.jpg" alt="" />
                    <p className='text-2xl mt-2'>Survive The Drive</p>
                    <a href="" className='underline-offset-1 underline text-xl mt-3'>Swap This Book</a>
                </div>

                <div className='flex flex-col justify-center items-center mb-10'>
                    <img src="phychlogy.jpg" alt="" />
                    <p className='text-2xl mt-2 text-center'>The Psychology Of <br /> Motivation</p>
                    <a href="" className='underline-offset-1 underline text-xl mt-3'>Swap This Book</a>
                </div>

                <div className='flex flex-col justify-center items-center mb-10'>
                    <img src="question.jpg" alt="" />
                    <p className='text-2xl mt-2 text-center'>15 Questions About <br />Online Advertising</p>
                    <a href="" className='underline-offset-1 underline text-xl mt-3'>Swap This Book</a>
                </div>

                <div className='flex flex-col justify-center items-center mb-10'>
                    <img src="sealthy.jpg" alt="" />
                    <p className='text-2xl mt-2  text-center'>A Conversation About <br /> Healthy Eating</p>
                    <a href="" className='underline-offset-1 underline text-xl mt-3'>Swap This Book</a>
                </div>

                <div className='flex flex-col justify-center items-center mb-10'>
                    <img src="think.jpg" alt="" />
                    <p className='text-2xl mt-2 text-center'>Think For Yourself: <br /> Control Your Life</p>
                    <a href="" className='underline-offset-1 underline text-xl mt-3'>Swap This Book</a>
                </div>
            </div>
        </div>
    );
};

export default Book_swapping;