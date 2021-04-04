import React, { useState } from 'react'

import InputCheckRadio from '../InputCheckRadio/InputCheckRadio'
import InputText from '../InputText/InputText'

import styles from './QueryBox.module.scss'

import { Query } from '../../types/query'

interface QueryBoxProps {
      inputs: Query[],
      resetAll?: (value: any) => void
}

//INPUT TEXT, INPUT SELECT?, RESET BUTTON, TOP BUTTON, 

const QueryBox: React.FC<QueryBoxProps> = ({inputs, resetAll}) => {

      let initialState = {}
      inputs.forEach(input => {
            initialState = {
                  ...initialState,
                  [input.name]: false
            }
      })

      const [isVisible, setVisibility] = useState(initialState)


      const toggle = (inputName) => {
            let currentIsVisible = isVisible[inputName]

            //Close clicked
            if(currentIsVisible){
                  setVisibility({
                        ...isVisible,
                        [inputName]: false
                  })
                  return
            }

            //Close all
            let newState = {...isVisible}
            for(const [name, curIsVisible] of Object.entries(isVisible)) {
                  if(curIsVisible) {
                        newState = {
                              ...isVisible,
                              [name] : false
                        }
                  }
            }

            //Open clicked
            setVisibility({
                  ...newState,
                  [inputName]: true
            })
      }

      const closeMenu = (inputName) =>{
            setVisibility({
                  ...isVisible,
                  [inputName]: false
            })
      }

      return (
            <div className={styles.container}>
                  {
                        inputs.map(input => {

                              return (
                                    <div className={`${styles.input} ${input.type === 'text' ? styles.fullWidthDropdown : ''} ${isVisible[input.name] ? styles.isVisible : ''}`} key={input.name}>
                                          
                                                <div className={styles.inputToggle} onClick={() => toggle(input.name)} >
                                                      {
                                                            input.type === 'text' ? 
                                                                  <img src="/SVG/glass.svg" alt="glass icon"/> 
                                                            :
                                                                  <h4>{input.class}</h4> 
                                                      }
                                                </div>

                                                {
                                                      input.type === 'text' ? 

                                                            <div className={styles.inputText}>
                                                                  <InputText name={input.name} onChange={input.onChange} placeholder="Search..." />  
                                                            </div> 


                                                      :

                                                            <div className={styles.inputOptions}>
                                                                  {
                                                                        input.options.map(option => {

                                                                              return (
                                                                                    <InputCheckRadio 
                                                                                    type={input.type}
                                                                                    name={input.name}
                                                                                    onChange={input.onChange}
                                                                                    onClick={() => closeMenu(input.name)}
                                                                                    label={option.label}
                                                                                    value={option.value}
                                                                                    checked={option.checked}
                                                                                    key={option.label}
                                                                                    />
                                                                              )
                                                                        })
                                                                  }
                                                            </div>      
                                                }
                                                
                                    </div>
                              )         
                        })
                  }

                  <div className={styles.inputToggle} onClick={resetAll} >
                        <img src="/SVG/reset.svg" alt="glass icon"/> 
                  </div>
            </div>
      )
}

export default QueryBox
