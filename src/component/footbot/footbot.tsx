import React from 'react';
import './footbot.css'
function FooterBottom() {
    return (
      <div className="footbottom">
        <div className="container d-flex justify-content-between">
          <div className="Muvcopyright">
            <span className="footbottext1">MUVEMI</span>
            <span className="footbottext2">© 2021 Tübitak. All rights reserved.</span>
          </div>
          <div className="Terms footbottext3"><span className='termstext'>Terms of Use </span>
            <span className='termstext'>
            Terms of Use API 
            </span>
            <span className='termstext'>Privacy policy</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default FooterBottom;