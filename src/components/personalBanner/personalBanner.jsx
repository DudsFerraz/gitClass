import React from 'react'

import Style from './PersonalBanner.module.css';

const PersonalBanner = () => {
  return (
    <section className={Style.banner}>
        <div className={Style.container}>
          <img src='images/foto.png' />
        </div>
        
        <div className={Style.container}>
            <h2>Seu nome aqui</h2>
            <p>React - C - Java - Python - HTML - CSS - Javascript</p>
        </div>
    </section>
  )
}

export default PersonalBanner;