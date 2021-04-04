import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.scss'

import { useColor } from 'color-thief-react'



const Card: React.FC<{image: string, title: string, description: string}> = ({image, title, description}) => {




      const { data, loading, error } = useColor(image, 'hex', {quality: 5000})

 

      return (
            <div className={styles.container}>
                    <figure className={[styles.side, styles.sideFront].join(' ')}>
                          <Image src={image} alt={image.match(/\/?(\w+)\./)[1]} layout="fill" objectFit="cover"/>
                    </figure>
                    <div className={[styles.side, styles.sideBack].join(' ')} style={{backgroundColor: loading || error? '#FFEACF' : data + '77' }}>
                              <h3>{title}</h3>
                              <p>{description}</p>
                              <Link href="/shop">
                                    <a>View more</a> 
                              </Link>
                    </div>
            </div>
      )
}

export default Card
