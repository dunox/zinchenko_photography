import React from 'react';
import { DropDownMenu } from '../dropDownMenu';
import styles from './styles/index.module.scss';

export const Header = () => {


  return (
    <div className={styles.header}>
      <DropDownMenu />
    </div>
  )
}