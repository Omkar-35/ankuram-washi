import React from 'react';
import './Banner.css';
import 'bootstrap';


function Banner() {
  
  return (
    <div className='container-fluid'>
        <header id='header-1' className="py-3 mb-0 text-center">
            <img className="logo img-fluid" id='logo' src="/Logo02.png" alt="School Logo" />
            <div className='header-content'>
              <h2 className="org">Shivaji Dnyanvihar Shikshan Mandal's</h2>
              <h1 className="schl-name">Ankuram Vidya Mandir, Washi</h1>
              <h4 className='mb-1' id='address'>Shivtirth, Washi, Tal.Washi Dist.Dharashiv 413503</h4>
            </div>
        </header>
    
</div>
);
}

export default Banner;
