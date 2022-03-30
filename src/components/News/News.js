import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const News = () => {
  const [news,setNews] = useState([])
  useEffect(()=>{
    fetch('./news.json')
    .then(res=>res.json())
    .then(data=>setNews(data))
  },[])
  return (
    <div >
      <h1>Latest News
       </h1>
       <div className="container my-5">
         <div className="row g-4">
           {
             news.map(data=>(
<div key={data?.title} className="col-lg-6">
  <div className="card ">
  <img src={data?.img} className="card-img-top" alt="..."/>
  
  <div className="card-body text-start">
  <p className='text-primary fw-bold'>{data?.category}</p>
    <h5 className="card-title">{data?.title}</h5>
    <div className="category my-3"> { '-'}
    By Jessica Moore on {data?.date}
    </div>
    <p className="card-text"> {data?.description}</p>
    <div className="btn btn-secondary">read more</div>
  </div>
</div>
           </div>
             ))
           }
           
         </div>
       </div>
    </div>
  );
};

export default News;