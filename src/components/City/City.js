import React from 'react';
import one from '../../png-1024/bara-imambara-119695.png'
import two from '../../png-1024/charminar-119696.png'
import three from '../../png-1024/chennai-central-railway-station-119692.png'
import four from '../../png-1024/gateway-of-india-119691.png'
import five from '../../png-1024/hawa-mahal-119697.png'
import six from '../../png-1024/tajmahal-119689.png'
import seven from '../../png-1024/victoria-memorial-119694.png'
import eight from '../../png-1024/vidhana-soudha-119693.png'
import nine from '../../png-1024/jhulta-minar-155249.png'
const City = () => {
  return (
    <div>
      <button type="button" className="btn border" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Hyderabad 
    </button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel"> Select a city </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p className='text-start'>POPULAR CITIES</p>
        <div className="popular-city">
          <div className="all-city">
             <div className="city ">
             <img src={one} alt="" />
               <div >
              <p> Delhi NCR</p>
               </div>
               
              
             </div>
             <div className="city ">
             <img src={two} alt="" />
               <div >
              <p>Charminar</p>
               </div>
               
              
             </div>
             <div className="city ">
             <img src={three} alt="" />
               <div >
              <p> Chennai</p>
               </div>
               
              
             </div>
             <div className="city ">
             <img src={four} alt="" />
               <div >
              <p>Hawa Mahal</p>
               </div>
               
              
             </div>
             <div className="city ">
             <img src={five} alt="" />
               <div >
              <p> Hawa Mahal</p>
               </div>
               
              
             </div>
             <div className="city ">
             <img src={six} alt="" />
               <div >
              <p> Tajmahal</p>
               </div>
               
              
             </div>
             <div className="city ">
             <img src={seven} alt="" />
               <div >
              <p> Victoria </p>
               </div>
               
              
             </div>
             <div className="city ">
             <img src={eight} alt="" />
               <div >
              <p> vidhana</p>
               </div>   
             </div>
             <div className="city ">
             <img src={nine} alt="" />
               <div >
              <p> jhulta minar</p>
               </div>   
             </div>
             
             
          </div>
        </div>
        <div className="others">
          <div className="text-start mt-4">
          OTHER CITIES

          <div className="others d-flex">
            <div className="other ">Chandigarh <br />
            <><small className='text-danger'>New</small></></div>
            <div className="other ">Indore  <br />
            <><small className='text-danger'>New</small></></div>
            <div className="other ">Kochi   <br />
            <><small className='text-danger'>New</small></></div>
            



          </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default City;