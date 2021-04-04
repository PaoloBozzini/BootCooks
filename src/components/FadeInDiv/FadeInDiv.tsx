import React, {useState, useRef, useEffect} from 'react';

import styles from './FadeInDiv.module.scss'



const FadeInDiv: React.FC<{className?:string;}> = ({children , className}) => {

      const [isVisible, setVisible] = useState(false);

      const domRef = useRef();

      useEffect(() => {

            const options = {
                  rootMargin: '100px'
            }

            const observer = new IntersectionObserver(entries => {
              
              if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
              }
            }, options);

            observer.observe(domRef.current);
        
            return () => {
                  if(!domRef.current) return;
                  observer.unobserve(domRef.current)};
          }, []);

          
      return (
      <div ref={ domRef } className={ [className, styles.container, isVisible ? styles.isVisible : ''].join(' ') }>
            { children }
      </div>
      )
}

export default FadeInDiv
