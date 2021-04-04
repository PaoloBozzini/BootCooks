import React from 'react'

import styles from './Modal.module.scss'

const Modal = ({children, show, close}) => {
 
     return (
            <>
                 {show && <div className={styles.backdrop} onClick={close}></div> }
                 <div className={styles.modal}>
                       
                       <img src="/SVG/close.svg" alt="Close icon" className={styles.closeIcon} onClick={close}/>
                        {children}


                        <style  jsx>{`
                        div.${styles.modal}{
                              width: ${show? '70%' : '0'};
                              height: ${show ? '100vh' : '0'};
                              opacity: ${show ? '1' : '0'};
                              visibility: ${show ? 'visible' : 'hidden'};
                        }
                        @media only screen and (max-width: 37.5em) { 
                              div.${styles.modal}{
                                    width: ${show? '100%' : '0'};
                              }
                        }; 
                  `}</style>
                </div>
            </>
      )
}

export default Modal
