import React from 'react';
import "./About.css";
import aboutImg from "../../images/takahiro-taguchi-Qa-L33FnQ9o-unsplash.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookHub adalah platform katalog buku digital inovatif yang dirancang untuk memudahkan pencinta buku menemukan karya-karya yang mereka cari. Didirikan pada 
              tahun 2024, BookHub hadir sebagai solusi modern bagi pembaca yang menginginkan akses cepat dan mudah ke informasi buku dari berbagai genre, penulis, dan penerbit. Platform 
              kami menggunakan teknologi pencarian canggih yang memungkinkan pengguna untuk menjelajahi ribuan judul buku dengan mudah, dilengkapi dengan fitur rekomendasi personal 
              yang memahami preferensi membaca setiap pengguna. Dengan antarmuka yang intuitif dan database yang terus diperbarui, BookHub berkomitmen untuk menjadi jembatan penghubung 
              antara pembaca dan dunia literasi yang luas, memastikan setiap orang dapat menemukan buku yang tepat untuk memperkaya pengetahuan dan mengisi waktu luang mereka dengan 
              bacaan berkualitas.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
