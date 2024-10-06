import React from "react";
import "../UI/Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper-footer">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="footer-horizontal-part">
              <img src="/images/logo.png" alt="ff" />
              
              <p class="mt-3 footer-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p class="footer-heading-after-p">
                We'r <span class="footer-social">Social</span>
              </p>
              <ul class="footer-ul">
                <li>
                  <a href="#">
                    <img
                      src="../images/facebook 1.png"
                      class="footer-social-images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="../images/instagram 1.png"
                      class="footer-social-images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="../images/whatsapp 1.png"
                      class="footer-social-images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="../images/twitter 1.png"
                      class="footer-social-images"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className=" footer-horizontal-part text-start">
              <p class="footer-heading-after-p text-center">
                Quick <span class="footer-social">Navigation</span>
              </p>
              <div class="  d-flex flex-column  align-items-start justify-content-center quick_nav" >
                <div class="  d-flex flex-row justify-content-center align-items-center">
                  <div class="footer-link-dot mt-1"></div>
                  <div>
                    <a
                      href="/"
                      className="mb-4"
                      
                    >
                      Home
                    </a>
                  </div>
                </div>
                <div class="  d-flex flex-row justify-content-between align-items-center">
                  <div class="footer-link-dot "></div>
                  <div>
                    <a href="/about1">About us</a>
                  </div>
                </div>
                <div class="  d-flex flex-row justify-content-between align-items-center">
                  <div class="footer-link-dot "></div>
                  <div>
                    <a href="/contact">Contact us</a>
                  </div>
                </div>
                <div class="  d-flex flex-row justify-content-between align-items-center">
                  <div class="footer-link-dot "></div>
                  <div>
                    <a href="/shopping1">Our Items</a>
                  </div>
                </div>
                <div class="  d-flex flex-row justify-content-between align-items-center">
                  <div class="footer-link-dot "></div>
                  <div>
                    <a href="#">Shipping</a>
                  </div>
                </div>
                
              </div>
            </div>
            <div className=" footer-horizontal-part text-start">
              <p class="footer-heading-after-p text-center">
                Quick <span class="footer-social">Navigation</span>
              </p>
              <div class="  d-flex flex-column  align-items-start justify-content-center quick-nav1">
                <div class="  d-flex flex-row justify-content-center align-items-center">
                  <div>
                  <img
                      src="../images/footer-location.png"
                      class="footer-location"
                    />
                  </div>
                  <div>
                    <p>
                    220 Mason Way, City of industry CA 91746, US
                    </p>
                   
                  </div>
                </div>
                <div class="  d-flex flex-row justify-content-center align-items-center">
                  <div>
                  <img
                      src="../images/footer-cell.png"
                      class="footer-location"
                    />
                 
                  </div>
                  <div>
                    <p>
                    +1 212-226-3126
                    </p>
                   
                  </div>
                </div>
                <div class="  d-flex flex-row justify-content-center align-items-center">
                  <div>
                  <img
                      src="../images/footer-email.png"
                      class="footer-location"
                    />
                 
                  </div>
                  <div>
                    <p>
                    info@foodweb.com
                    </p>
                   
                  </div>
                </div>
                <div class="  d-flex flex-row justify-content-center align-items-center">
                  <div>
                  <img
                      src="../images/footer-timer (1).png"
                      class="footer-location"
                    />
                  
                 
                  </div>
                  <div>
                    <p>
                    Mon - Sat: 9am - 6pm
                    </p>
                   
                  </div>
                </div>
               
               
              
              
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <div className="wrapper-footer-bar">
          <div className="d-flex flex-column flex-md-row  justify-content-between align-items-center   text-white ">
            <div className="text-center footer-bar-text">© 2023 Food web Company</div>
            <div className="text-center footer-bar-text">
              Designed & Developed by LEADconcept
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
