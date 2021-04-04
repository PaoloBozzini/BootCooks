import React from 'react'

import styles from './InputCheckRadio.module.scss'

interface InputCheckRadioProps {
      label: string;
      name: string;
      value: string;
      checked?: boolean;
      type: string;
      onChange: (value: any) => void;
      onClick?: (value: any) => void;
}

const InputCheckRadio: React.FC<InputCheckRadioProps> = ({label, name, value, onChange, checked, type, onClick}) => {
      return (
            <label className={`${styles.container} ${styles[type]}` } onClick={onClick}>
                  {label}
                  <input type={type} name={name} value={value} onChange={onChange} checked={checked}/>
                  <span />
            </label>
      )
}

export default InputCheckRadio
