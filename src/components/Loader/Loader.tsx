import React from 'react'
import styles from './Loader.module.scss'


const Loader = ({color, size}) => {
      return (
            <div className={`${styles.container} ${styles[color]}`} style={{width: size, height: size}}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
            </div>
      )
}
export default Loader
