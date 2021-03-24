import React, { useState } from 'react';
import styles from './styles/index.module.scss';
import cx from 'classnames';

export const DropDownMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => setIsOpen(!isOpen);

  const hamburgerJSX = cx({
    [styles.siteMenuHamburger]: true,
    [styles.notActive]: !isOpen,
    [styles.active]: isOpen
  });

  const dropDownJSX = cx({
    [styles.siteMenuList]: true,
    [styles.notActive]: !isOpen,
    [styles.active]: isOpen
  });
  
  return (
    <div className={styles.siteMenu}>
      <div 
      className={hamburgerJSX}
      onClick={toogleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={dropDownJSX}>
        <ul>
          <li>ballet</li>
          <li>portrait</li>
          <li>prints for sale</li>
          <li>about me</li>
          <li>contact me</li>
        </ul>
      </div>
    </div>
    
  )
}