import React from 'react'

import NavigationList from '../NavigationList/NavigationList'
import SocialList from './SocialList/SocialList'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
      const socials = [
            {
                  href: "https://www.facebook.com",
                  icon: 'facebook'
            },
            {
                  href: "https://www.twitter.com",
                  icon: 'twitter'
            },
            {
                  href:"https://www.youtube.com",
                  icon: 'youtube'
            },
            {
                  href:"https://www.tiktok.com",
                  icon: 'tiktok'
            },
            {
                  href: "https://www.instagram.com",
                  icon: 'instagram'
            }
      ]


      return (
            <footer>
                  <div className={styles.container}>
                        <div className={styles.left}>
                              <h1>BootCooks</h1>
                              <nav>
                                    <NavigationList
                                          links={['home', 'recipes', 'shop' ]}
                                          direction='column'
                                    />
                              </nav>
                              <nav>
                                    <NavigationList
                                          links={['about', 'contacts', 'terms & privacy']}
                                          direction='column'
                                          dark
                                    />
                              </nav>
                              <p>&copy; Created by Paolo Bozzini. <br /> All rights reserved.</p>
                        </div>
                        
                        <div className={styles.right}>
                              <div>
                                    <h3>Newsletter</h3>
                                    <p>Sign up to our newsletter to stay up to date</p>
                                    <input type="email" placeholder="Enter your e-mail" />
                              </div>
                              <div>
                                    <h3>Follow us</h3>
                                    <SocialList 
                                          socials={socials}
                                    />
                                    <div></div>
                              </div>
                        </div>
                  </div>
            </footer>
            
      )
}

export default Footer
