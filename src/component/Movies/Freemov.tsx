import React from 'react';

// Import your images
import avaImage from '../IMG/Ava.png';
import squidGameImage from '../IMG/Squid.png';
import maradonaImage from '../IMG/Maradona.png';
import gotImage from '../IMG/Got small.png';
import doctorImage from '../IMG/Dcotor.png';
import sourceCodeImage from '../IMG/Sour Co.png';

function FreeToWatchMovies() {
  return (
    <section className="p-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pb-4">
          <p className="Popular">Free To Watch</p>
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
                src={avaImage}
                className="card-img-top İmgcurve"
                alt="Ava"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">Ava</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Drama
              </h6>
              <p className="card-text text-gray movsubtext">
                1h 46m / 2017 <span className="blacknumber">86.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={squidGameImage}
                className="card-img-top İmgcurve"
                alt="Squid Game"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">Squid Game</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Action & Adventure, Mystery, Drama
              </h6>
              <p className="card-text text-gray movsubtext">
                54m / 2021 <span className="blacknumber">78.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={maradonaImage}
                className="card-img-top İmgcurve"
                alt="Maradona"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">Maradona: Blessed Dream</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Drama, Documentary
              </h6>
              <p className="card-text text-gray movsubtext">
                1h / 2021 <span className="blacknumber">76.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={gotImage}
                className="card-img-top İmgcurve"
                alt="Game of Thrones"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">Game of Thrones</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Sci-Fi & Fantasy, Drama, Action & Adventure
              </h6>
              <p className="card-text text-gray movsubtext">
                1h / 2011 <span className="blacknumber">84.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={doctorImage}
                className="card-img-top İmgcurve"
                alt="The Good Doctor"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">The Good Doctor</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Drama
              </h6>
              <p className="card-text text-gray movsubtext">
                43m / 2021 <span className="blacknumber">86.0</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-2">
            <div className="card">
              <img
                src={sourceCodeImage}
                className="card-img-top İmgcurve"
                alt="The Source Code"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title movtitle">The Source Code</h5>
              <h6 className="card-subtitle mb-2 text-muted movsubtitle">
                Action, Science Fiction
              </h6>
              <p className="card-text text-gray movsubtext">
                2h 23m / 2021 <span className="blacknumber">86.0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeToWatchMovies;
