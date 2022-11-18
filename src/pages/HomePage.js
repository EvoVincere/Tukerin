import React from 'react';
import Category from '../components/Category';
import Recommendation from '../components/Recommendation';
// import heroImage from '../images/hero.webp';
import '../styles/HomePage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="hero-image">
        <div className="container-fluid p-0">
          <div id="carousel" className="carousel slide hero-slides" data-ride="carousel">
            <ol className="carousel-indicators">
              <li className="active" data-target="#carousel" data-slide-to="0" />
              <li data-target="#carousel" data-slide-to="1" />
              <li data-target="#carousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active boat" />
              <div className="carousel-item sea" />
              <div className="carousel-item river" />
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="category">
        <h2>Kategori</h2>
        <Category />
      </div>
      <div className="recommendation-container">
        <h2>Rekomendasi</h2>
        <Recommendation />
      </div>
    </div>
  );
}

export default Homepage;
