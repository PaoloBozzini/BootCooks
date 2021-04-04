import React , {forwardRef } from 'react'
import Link from 'next/link'

import styles from './RecipeArticle.module.scss'

interface RecipeArticleProps{
      image: string;
      label: string;
      id: string;
      ref?: any;
}

const RecipeArticle: React.FC<RecipeArticleProps> = forwardRef<HTMLInputElement, RecipeArticleProps>(({image, label, id}, ref) => {

     
      return (
            <Link href={`/recipes/${encodeURIComponent(id)}`}>
                  <a>
                        <article ref={ref} className={styles.recipe}>
                              <div>
                                    <h3>
                                          {label}
                                    </h3>
                              </div>
                              <img src={image} alt={label}/>
                        </article>
                  </a>
            </Link>
      )
})

export default RecipeArticle
