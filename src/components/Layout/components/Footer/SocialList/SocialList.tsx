import React from 'react';
import SocialIcon from './SocialIcon/SocialIcon';
import styles from './SocialList.module.scss';



interface SocialListProps {
    socials: {href: string; icon: string}[];
}

const SocialList: React.FC<SocialListProps> = ({socials}) => {
      const socialItems = socials.map((social) => {
            return <SocialIcon 
                  icon={social.icon}
                  href={social.href}
                  key={social.icon}
            />
      })

      return (
            <ul className={styles.list}>
                  {socialItems}
            </ul>
      )
}

export default SocialList
