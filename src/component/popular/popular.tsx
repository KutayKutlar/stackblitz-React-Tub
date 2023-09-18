import React from 'react';
import './popular.css';
import peakyImage from '../IMG/Peaky.png';
import tomWarImage from '../IMG/TOm war.png';
import mirlImage from '../IMG/Mirl.png';
import harderFallImage from '../IMG/Harder fall.png';
import fearImage from '../IMG/Fear.png';
import tengoImage from '../IMG/Tengo.png';

function PopularMovies() {
  return (
    <section className="p-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pb-4">
          <p className="Popular">Whats Popular</p>
          <div>
            <button type="button" className="btn btn-outline-dark btnmore">
              More
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
            <img
                src={peakyImage} // Use the imported image
                className="card-img-top İmgcurve"
                alt="Peaky"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">Peaky blinders</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Crime,Drama
              </h6>
              <p className="card-text text-gray movsubtext">
                1h / 2013 <span className="blacknumber">86.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={tomWarImage}
                className="card-img-top İmgcurve"
                alt="TOm"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">The Tomorrow War</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Action,Science Fiction,Adventure
              </h6>
              <p className="card-text text-gray movsubtext">
                2h 18m / 2021 <span className="blacknumber">81.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={mirlImage}
                className="card-img-top İmgcurve"
                alt="Mirl"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">
                Miraculous: Tales of Ladybug & Cat Noir
              </h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Action & Adventure,Animation,Kids
              </h6>
              <p className="card-text text-gray movsubtext">
                26m / 2015 <span className="blacknumber">80.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={harderFallImage}
                className="card-img-top İmgcurve"
                alt="Harder"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">The Harder They Fall</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">Western</h6>
              <p className="card-text text-gray movsubtext">
                2h 19m / 2021 <span className="blacknumber">68.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={fearImage}
                className="card-img-top İmgcurve"
                alt="Fear"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">Fear The Walking Dead</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Action & Adventure,Drama
              </h6>
              <p className="card-text text-gray movsubtext">
                43m / 2015 <span className="blacknumber">77.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={tengoImage}
                className="card-img-top İmgcurve"
                alt="Tengo"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">I Want You</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Drama,Romance
              </h6>
              <p className="card-text text-gray movsubtext">
                2h 10m / 2012 <span className="blacknumber">73.0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularMovies;
