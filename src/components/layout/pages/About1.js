




import React, { useEffect } from 'react'
import Slider from '../../Slider/Slider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../pages/About.css'
import { Footer } from './UI/Footer'
export const About1 = () => {
  
    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <>
    <Slider  style={{marginTop:"50px"}}/>
    <div className='about-team'>
        <div className='wrapper-about' >
           <div className="d-flex flex-column flex-md-row justify-content-center
           justify-content-md-between text-center
           
           align-items-center  ">
            {/* <div> */}
            <div className="card text-ceneter"
           //  data-aos="fade-right" 
            style={{width:"100%",padding:"0px"}} >
            <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." width="200px" height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
            {/* </div> */}
            
            {/* <div> */}
            <div className="card" 
           // data-aos="fade-right" 
            style={{width:"100%",padding:"0px"}} >
            <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." width="200px" height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
            {/* </div> */}
            {/* <div> */}
            <div className="card" 
           // data-aos="fade-down" 
            style={{width:"100%",padding:"0px"}} >
            <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." width="200px" height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
            {/* </div> */}
            {/* <div> */}
            <div className="card" 
          //  data-aos="fade-left" 
            style={{width:"100%",padding:"0px"}} >
            <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." width="200px" height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
            {/* </div> */}


          </div> 
        </div>

      </div>
      <section id="footer">
        <Footer />
 

  
</section>
    </>
      

    
  )
}
