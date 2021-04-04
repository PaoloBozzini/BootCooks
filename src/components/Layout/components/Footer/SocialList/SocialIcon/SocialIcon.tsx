import React from 'react'
import styles from './SocialIcon.module.scss'

interface SocialIconProps {
      href: string;
      icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({href, icon}) => {
      return (
            <li className={styles.icon}>
                 <a href={href}>
                       <img src={`/SVG/socials/${icon}.svg`} alt={`${icon} icon`}/>
                  </a> 
            </li>
      )
}

export default SocialIcon
