import React from 'react'

import styles from './InputText.module.scss'

const InputText = (props) => {
      return (
            <input className={styles.input} type="text" {...props}/>
      )
}

export default InputText
