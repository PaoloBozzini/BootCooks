import React from 'react'
import NavigationList from '../NavigationList/NavigationList'
import styles from './Header.module.scss'


const Header = () => {
      return (
            <header>
                  <div className={styles.container}>
                        <div>
                              <h1>BootCooks</h1>
                              <nav>
                                    <NavigationList 
                                          links={['home', 'recipes', 'shop']}  
                                    />
                              </nav>
                        </div>
                  </div>
            </header>
      )
}

export default Header
