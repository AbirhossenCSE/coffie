import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex'>
            <h2 className='bg-[#D72050] text-blue-100 px-3 py-1'>Latest News</h2>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;