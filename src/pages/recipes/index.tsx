import React, { useRef, useCallback } from 'react'
import Head from 'next/head'

import Section from "../../components/Section/Section"
import Loader from "../../components/Loader/Loader"
import RecipeArticle from '../../components/RecipeArticle/RecipeArticle'
import QueryBox from '../../components/QueryBox/QueryBox'

import useRecipeSearch from "../../hooks/useRecipeSearch"
import useQueries from '../../hooks/useQueries'


import { RECIPES_PER_LOAD } from "../../lib/config"
import { keyGenerator } from '../../util/utility'
import { RecipeType } from '../../types/edamamApiType'
import queries from '../../lib/queries'
import styles from "../../styles/pages/Recipes.module.scss"


const Recipes = () => {
      
      const {inputsProps, query, index, setIndex, resetAllQueries} = useQueries(queries)
      const {recipes, hasMore, loading, error } = useRecipeSearch(query, index)

      //(THIS API DOES NOT HAVE AN ID PER RECIPE)
      const key = keyGenerator('recipe')

        
      //INFINITE SCROLL
      const observer = useRef(null)
      const lastRecipeRef = useCallback(node => {
            if (loading) return
            if (observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver(entries => {
                  if (entries[0].isIntersecting && hasMore) {
                  setIndex(prevIndex => prevIndex + RECIPES_PER_LOAD)
                  }
            })

            if (node) observer.current.observe(node)

      }, [loading, hasMore])
            
  
      
      return (
            <>
            <Head>
                  <title>Recipes - BootCooks</title>
            </Head>

            <main>

                  <Section title='Search for recipes'>

                        <QueryBox inputs={inputsProps} resetAll={resetAllQueries}/>

                        <div className={styles.recipeGrid}>
                        
                              {recipes.map((item: RecipeType, index: number) => {

                                    const { recipe } = item;
                              
                                    if(recipes.length === index + 1){
                                    
                                          return <RecipeArticle ref={lastRecipeRef} key={key.next().value} label={recipe.label} image={recipe.image} id={recipe.uri} />
                                          
                                    }
                        
                                    return <RecipeArticle key={key.next().value} label={recipe.label} image={recipe.image} id={recipe.uri} />
                              
                              })}
                        </div>

                        {(loading && !error) && <Loader color='black' size='8vw'/>}
                        {error && <div className={styles.message}><h2>An error occurred. It might be due to the api limitations. Please try again (slowly).</h2></div> }
                        {(!hasMore && !loading) && <div className={styles.message}><h2>No recipes.</h2></div> }

                  </Section>
            </main>
            
            
            </>
      )
}


export default Recipes
