import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Temukan buku favorit Anda.</h2><br />
                <p className='header-text fs-18 fw-3'>Portal Literasi Terlengkap yang Mempertemukan Anda dengan Karya-Karya Terbaik dari Penulis 
                  Legendaris Hingga Penulis Kontemporer. Jelajahi, Temukan, dan Biarkan Setiap Buku Membawa Anda ke Petualangan Baru.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header