import React from 'react'

import Style from './Header.module.css';

const Header = ({nome}) => {
  return (
    <header className={Style.header}>
        <h1>{nome}</h1>

        <div className={Style.menuOptions}>
            <a href='#contact'>Contato</a>
        </div>
    </header>
  )
}

export default Header;