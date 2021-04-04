import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps{
      [key: string]: any;
      white?: boolean;
      hover?: string;
}

const Button:React.FC<ButtonProps> = ({white, hover, children, ...props}) => {
      return (
            <button className={[styles.btn, white? styles.btnWhite: styles.btnDark].join(' ')} {...props}>
                  {children}
                  <style  jsx>{`
                        button.${styles.btnWhite}:hover {
                              background-color: ${hover? hover : '#FFEACF'};
                        }
                        button.${styles.btnWhite}:disabled:hover {
                              background-color: #BFBFBF;
                        }
                  `}</style>
            </button>
      )
}

export default Button
