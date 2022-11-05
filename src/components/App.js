import React, { useState } from 'react';
import {
  Routes, Route, Link, useSearchParams,
} from 'react-router-dom';
// Components
import SearchBar from './SearchBar';
// Pages
import Homepage from '../pages/HomePage';
// Styles
import '../styles/App.css';
import brandLogo from '../images/logo192.png';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [products, setProduct] = useState([]);
  const [keyword, setKeyword] = useState(() => searchParams.get('keywordSearch') || '');

  function onKeywordChangeHandler(keywordSearch) {
    setKeyword(keyword);
    setSearchParams({ keywordSearch });
  }

  // const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(
  //   keyword.toLocaleLowerCase(),
  // ));

  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/">Tentang Kami</a></li>
            <li><a href="/">Hubungi Kami</a></li>
          </ul>
        </nav>
        <div>
          <Link to="/" className="brand-logo"><img src="" alt="logo tukerin" /></Link>
          <SearchBar
            keyword={keyword}
            // eslint-disable-next-line react/jsx-no-bind
            keywordChange={onKeywordChangeHandler}
          />
          <div className="authentication-button">
            <button type="button">Masuk</button>
            <button type="button">Register</button>
          </div>
        </div>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      <footer>
        <div>
          <img src={brandLogo} alt="logo tukerin" />
          <div className="usefull-links">
            <h3>Jelajahi Tukerin</h3>
            <ul>
              <li><a href="/">Beranda</a></li>
              <li><a href="/">Tentang Kami</a></li>
              <li><a href="/">Hubungi Kami</a></li>
            </ul>
          </div>
          <div className="ikuti-kami">
            <h3>Ikuti Kami</h3>
            <ul>
              <li><button type="button">Facebook</button></li>
              <li><button type="button">Instagram</button></li>
              <li><button type="button">Twitter</button></li>
            </ul>
          </div>
        </div>
        <h4>2022, C22-015</h4>
      </footer>
    </div>
  );
}

export default App;