import React from 'react';
import styles from './styles/index.module.scss';
import ballet from '../../images/ballet.jpg';
import portrait from '../../images/portrait.jpg';
import FacebookIcon from '../../images/facebook-icon.svg'
import InstagramIcon from '../../images/instagram-icon.svg'


export const MainPage = () => {
  return (
  <div className={styles.hero}>
      <div className={styles.title}>
        <h1>Oksana <span>Zinchenko</span></h1>
        <p><span>ballet photographer</span></p>
      </div>
      <div className={styles.category}>
        <span>Ballet</span>
        <img className={styles.categoryPhoto} src={ballet} alt="Ballet"/>
        <a href="https://www.instagram.com/ballet_ok_zinchenko/" target="_blank" rel="noreferrer"><img className={styles.instagramIcon} src={InstagramIcon} alt="Instagram"/></a>
      </div>
      <div className={styles.category}>
        <span>Portrait</span>
       <img className={styles.categoryPhoto} src={portrait} alt="Portrait"/>
      <a href="https://www.facebook.com/OkZinchenko/" target="_blank" rel="noreferrer"><img className={styles.facebookIcon} src={FacebookIcon} alt="Facebook"/></a>
      </div>
  </div>
  )
}