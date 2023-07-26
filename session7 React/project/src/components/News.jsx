import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedNews = () => {
    const [News, setNews] = useState([]);
    useEffect(() => {
        fetchNews();
    }, []);
    const fetchNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=97900b5265e3418c8c1375f538be8d21').then((res) => {
            console.log(res);
            setNews(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1> News</h1>
            <div className='item-container'>
                {News.map((News) => (
                    <div className='card'>
                        <img src={News.UrlToImage} alt='' />
                        <h6>title : {News.title}</h6>
                        <p>auther :{News.auther}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};
export default FeaturedNews;