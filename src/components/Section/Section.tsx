import React from 'react'

import styles from './Section.module.scss'



const Section: React.FC<{title: string, className?:string}> = ({title, children, className}) => {
      return (
            <section className={[styles.section, className].join(' ')}>
                        <h2>{title}</h2>
                        {children}
            </section>
      )
}

export default Section
