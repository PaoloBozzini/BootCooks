import React from 'react';
import Link from 'next/link';
import styles from './NavigationItem.module.scss'



interface ItemProps {
      href: string;
      text: string;
      dark?: boolean;
}

const NavigationItem : React.FC<ItemProps> = ({href, text, dark}) => {
      
      return (
            <li className={styles.navigationItem}>
                  <Link href={href}>
                        <a className={dark ? styles.dark : styles.light}>{text}</a>
                  </Link>
            </li>
      )
}

export default NavigationItem


