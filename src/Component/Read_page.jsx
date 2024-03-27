import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import React, { useEffect, useState } from 'react';
import { iterate } from 'localforage';





const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const ReadPage = () => {


    const [books, setbooks] = useState([])
    const [bookname, setbookname] = useState([])
    const [bookpage, setbookpage] = useState([])

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => {
                const readlist = JSON.parse(localStorage.getItem('readdata'))
                if (readlist) {
                    const readbook = data.filter(data => readlist.includes(data.bookId))
                    setbooks(readbook)
                }

            })
    }, [])

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
      };

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <BarChart width={900} height={600} data={books}>
                <XAxis dataKey="bookName" />
                <YAxis dataKey="totalPages" />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={renderCustomBarLabel} />
            </BarChart>
        </div>

    );
};

export default ReadPage;
