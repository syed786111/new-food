import React,{useState,useEffect,useRef} from 'react'
import Slider from '../Slider/Slider'
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom'

import axios from 'axios';
import styles from '../layout/Contact.module.css'
import { Footer } from './pages/UI/Footer';
export const Contact = () => {
  const navigate= useNavigate()
  const form=useRef();
  const [contact,setContact]=useState({
   
    fullname:"",
    email:"",
    
    contactNo:"",
    message:"",
    
    city:""

    
  })
  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});
  }
  // useEffect(()=>{
  //   setUser({...user,name:null,email:null});
  // },[])
  
const HandleSubmit=(e)=>{
  e.preventDefault()
  console.log("contac is submitted")
  
    
    //console.log(num)
    console.log("add is pressed")
    // console.log(user.email)
    // console.log(user.file.name)

    const formData = new FormData();
    
    formData.append('name', contact.fullname)
    
    formData.append('email', contact.email);
    formData.append('city', contact.city);
    formData.append('cell', contact.contactNo);
    formData.append('message', contact.message);
    // let url = "http://localhost/Server.php"
    let url = "http://localhost/ReactApps/food-web/AddContact.php"
    axios.post(url, formData, {
    })
      .then(res => {
        console.log(res.data);
      })
//alert("contact save successfully")
    window.location.reload(false);
    
   //navigate('/welcome',{state:{name:user.name1,email:user.email}});
   emailjs.sendForm(
    "service_df28ush",
          "template_wdhkugw",
          form.current,
          "dkkdslkjhin_wG7bh"
    )
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  

}

  return (
    <div>
      <div >
       
        <Slider />
      </div>
<div className={styles.form1}>
  <div className={styles.wrapper}>
  <div className={styles.contactNote}>
        <div className={styles.item}>
          <div className="card" >

            <div className="card-body" style={{ backgroundColor: "#FBF7F4" }}>
              <h3 className="card-title">Get In Touch With Food Web.</h3>
              <p className="card-text">We area technology plateform as a service enabling business to
                setup e-commerce web and app system. We'd love to hear from you</p>

            </div>
          </div>
        </div>
        <div className={styles.item1}>

          <img src="../images/contactBanner.svg" class="card-img-top" alt="..." />


        </div>
      </div>

  </div>
</div>
      
      <section id="contact-form">
        <div className={styles.form}>
          <div className={styles.wrapper}>
            <div className='d-flex flex-column flex-md-row justify-content-between '>
              <div>
              <div className="card" style={{ width: "100%" }}>
              
              <div className="card-body">
                <h5 className="card-title"><h1
                
                className={styles.label1}>Talk to us
                </h1></h5>

                <p className="card-text">
                  <span style={{ fontSize: "20px", fontWeight: "bold", fontStyle: "-moz-initial" }}> Contact us directly,: </span>
                  we are happy to serve you
                  anytime.</p>
                  <div>
                    <p><strong>Lahore</strong> +92 042 35766486</p>
                  </div>
                  <div>
                    <p><strong>Lahore</strong> +92 042 35766486</p>
                  </div>

              </div>
             
            </div> 
              </div>


              <div className={styles.formbox}>
              <form onSubmit={HandleSubmit} ref={form}>
              <label className={styles.label} >FullName</label>
              <input type="text"  className={styles.input}
              id="fullname" placeholder='Please enter Your Name' required="true" 
              name="fullname" onChange={handleChange} 
              />
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.input}
              value={contact.email} 
              id="email" placeholder='Please enter email' required="true" 
              name="email" onChange={handleChange} 
              />
             
              <label className={styles.label}>Contact No</label><br/>
              <select  id="city" className={styles.input}
              value={contact.city} 
               placeholder='Please seect city' required="true" 
              name="city" onChange={handleChange} 
              >
  <option value="Lahore">Lahore</option>
  <option value="Karachi">Karachi</option>
  <option value="Islamabad">Islamabad</option>
  <option value="Faisalabad">Faisalabad</option>
  <option value="Multan">Multan</option>
  <option value="Bawalpur">Bawalpur</option>
  <option value="Sargodha">Sargodha</option>
  <option value="Gujranwala">Gujranwala</option>
  <option value="Rahim Yar Khan">Rahim Yar Khan</option>
</select>
              <input type="text" className={styles.input}
               id="contactNo" value={contact.contactNo} 
               placeholder='Please enter cell no' required="true" 
              name="contactNo" onChange={handleChange}/>
              <label className={styles.label}>Message</label><br/>
              <textarea className={styles.input}
              value={contact.message} 
              id="message" placeholder='Please enter message' required="true" 
              name="message" onChange={handleChange} 
              />
           
              <input type="submit" value="submit" 
              className={styles.btnadd}
              
             />
            </form>

              </div>
            </div>
          </div>
        </div>

      </section>

      

<section id="footer">
  <Footer />

</section>

    </div>
  )
}
