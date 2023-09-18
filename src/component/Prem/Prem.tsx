import React from 'react';
import './Prem.css';

function PremiumSection() {
  return (
    <div className='container'>
    <section className="text-center p-5">
      <div className="d-inline-flex gap-3">
        <div className="prebox">
          <button className="prebut">Get Premium</button>
          <p className="tmbdtext">The TMBD Advantage</p>
          <h3 className="premil">Millions of movies, TV shows and people to discover. Explore now.</h3>
          <p className="presmalltxt">The Movie Database (TMDB) is a community-built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default PremiumSection;
