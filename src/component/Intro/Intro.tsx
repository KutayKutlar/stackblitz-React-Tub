import React from 'react';
import './Intro.css';
import introBgImage from '../IMG/mainpagebg.png';
import vectorImage from '../IMG/Vector.png';
import imdbImage from '../IMG/imdb.png';
export function IntroSection() {
  return (
    <section className="bg-light text-light">
      <img className="img-fluid d-none d-sm-block introimage" src={introBgImage} alt="introbg" />

      <div className="container intro">
        <div className="input-group introinput">
          <input type="text" className="form-control" placeholder="Search for a movie,person or a genre" aria-describedby="button-addon2" />
          <button className="btn btn-sm btn-danger" type="button" id="button-addon2">Search</button>
        </div>

        <div className="desbox">
          <h1 className="introtext">Peaky Blinders(2013)</h1>
          <div className="imdbpos">
          <img className="imdbimg" src={imdbImage} alt="imdbimg" />
            <p className="imdbtext">86.0/100</p>
          </div>
          <p className="introtextalt">
            John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
          </p>

          <button className="watchbutton">
          <img src={vectorImage} alt="vector" />
            <span>Watch trailer</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
