import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './NavigationList.module.scss'



interface ListProps {
      links: string[];
      dark?: boolean;
      direction?: 'column' | 'row';
}

const NavigationList: React.FC<ListProps> = ({links, dark, direction}) => {
      
      const listItems = links.map((link) => {
            const href = link.split(' ')[0].toLowerCase()
            return (
                  <NavigationItem
                  key = {link}
                  text={link}
                  href={href === ('home' || 'homepage')? '/' :`/${href.toLowerCase()}`}
                  dark={dark}
                  />
            )
      })

      return (
            <ul className={[styles.list, direction === 'column'? styles.column : styles.row].join(' ')}>
                  {listItems}
            </ul>
      )
}

export default NavigationList
