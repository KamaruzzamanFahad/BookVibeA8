import React from 'react';

const Book_Series = () => {
    return (
        <div>
            <h1 className='text-center p-7 rounded-2xl text-3xl font-bold text-black mt-5 bg-[#0000000d]'>Book Series</h1>
            <p className='text-xl mt-7'>
                Yes, this is the section where we give you, our readers, our takes on book series. In other words, we’ll review stories that span across multiple volumes of books, explain character growth, evaluate the plot, and publish checklists (be it fantasy, drama, romance, or mystery).
                <br />
                <br />
                This last bit is extremely helpful for new readers and nerds when you’re picking up your first book of an author. We strongly believe that our opinions will play a significant role in shaping up your bookshelves and what “Collections” you have on them.
                <br />
                <br />
                Brace yourselves as we take you on an entertaining (and sometimes, harsh) ride!
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 mb-10 gap-5'>
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <img width={'80%'} src="https://bookvibe.com/wp-content/uploads/2024/01/Crescent-City-Series-in-Order-546x600.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='mt-10 text-center text-3xl w-80'>
                        The Crescent City Series in Order: Why is it The Most Loved Books of All Time?
                        </h3>
                        <p className='text-xl mt-5'>
                        In other words, what is it <br /> about the Crescent City...
                        </p>
                        <a href="" className='underline-offset-1 underline text-xl mt-3'>Read More</a>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <img width={'80%'} src="https://bookvibe.com/wp-content/uploads/2023/11/Louise-Penny-Books-in-Order-Inspector-Gamache-Books-546x600.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='mt-10 text-center text-3xl w-80'>
                        A List of Louise Penny Books in Order Summaries: Inspector Gamache Novels Serialized!
                        </h3>
                        <p className='text-xl mt-5'>
                        It’s fine. You don’t have to <br /> know who Inspector...
                        </p>
                        <a href="" className='underline-offset-1 underline text-xl mt-3'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book_Series;