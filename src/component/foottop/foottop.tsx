import React from 'react';
import './foottop.css'
function Footer() {
  const iconStyle = {
    fontSize: '24px', // Adjust the font size as needed
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="foottop">
          <div className="d-flex">
            <div className="BASICS col-3">
              <div className="foottitle">THE BASICS</div>
              <div className="foottext">About TMDB</div>
              <div className="foottext">Contact us</div>
              <div className="foottext">Support Forums</div>
              <div className="foottext">API</div>
              <div className="foottext">System Status</div>
            </div>

            <div className="Getinvo col-3">
              <div className="foottitle">GET INVOLVED</div>
              <div className="foottext">Contribution Bible</div>
              <div className="foottext">3rd Party Applications</div>
              <div className="foottext">Add New Movie</div>
              <div className="foottext">Add New TV Show</div>
            </div>

            <div className="commu col-3">
              <div className="foottitle">COMMUNITY</div>
              <div className="foottext">Guidelines</div>
              <div className="foottext">Discussions</div>
              <div className="foottext">Twitter</div>
            </div>

            <div className="social col-3">
              <div className="foottitle">SOCIAL</div>
              <div className="footimg d-flex gap-3">
                <i className="bi bi-facebook text-light"style={iconStyle}></i>
                <i className="bi bi-instagram text-light"style={iconStyle}></i>
                <i className="bi bi-twitter text-light"style={iconStyle}></i>
                <i className="bi bi-youtube text-light"style={iconStyle}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
