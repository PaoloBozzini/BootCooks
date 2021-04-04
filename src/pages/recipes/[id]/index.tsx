import React from 'react'
import Head from 'next/head'

import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

import Section from '../../../components/Section/Section'

import api from '../../../lib/api'

import styles from '../../../styles/pages/[Recipe].module.scss'

export const Recipe: InferGetServerSidePropsType<typeof getServerSideProps> = ({data}) => {
      
      const [ recipe ] = data
      
      

      return (
            <>
            <Head>
                  <title>{recipe.label} - Bootcooks</title>
            </Head>
            <main>
                 <img src={recipe.image} alt={recipe.label} className={styles.image} />
                  <Section
                  className={styles.section}
                  title={recipe.label}>
                        <div className={styles.container}>
                               <div className={styles.ingredients}>
                                    <h4>Ingredients</h4>
                                    <ul>
                                          {recipe.ingredientLines.map((ingr)=>{
                                                return <li key={ingr}>{ingr}</li>
                                          })}
                                    </ul>
                               </div>
                               <div className={styles.instructions}>
                                     <h4>Instructions</h4>
                                     <p>1 Vivamus iaculis, diam eu luctus pellentesque, velit ante vulputate urna, sit amet sagittis mi mauris venenatis odio. Fusce mattis sapien orci, ac pretium quam hendrerit eget. Aliquam et tortor in velit vehicula sodales. Fusce id velit mi. Duis sit amet efficitur odio. Proin sagittis ante et tortor interdum maximus. Etiam eget dictum augue. Sed sed nulla ligula. Suspendisse metus dui, gravida at tortor nec, dictum blandit nulla.</p>
                                     <p>2 Sed rhoncus at neque sit amet finibus. Nam vitae est vitae ligula tempor porttitor quis id lorem. Duis lobortis a odio at fermentum. Maecenas blandit dui mi, non tempor eros facilisis eget. Nulla at lacus justo. Phasellus vitae pretium nisi. Vivamus sollicitudin ultrices magna et placerat. Duis consequat felis urna, eu maximus mauris scelerisque sed. Proin sit amet placerat nulla. Mauris mi massa, auctor nec nulla ac, mollis rutrum metus. Sed sed purus ut ligula condimentum congue. Integer in tempus felis.</p>
                                     <p>3 Curabitur fringilla tempus nibh vel sodales. Sed a nulla tempus, rutrum mi quis, porttitor orci. Ut sed convallis nisl. Curabitur blandit mi ac massa blandit venenatis. Mauris rutrum, leo vel tristique congue, est ex laoreet orci, a sodales ipsum eros nec dui. Etiam hendrerit volutpat euismod. Nullam auctor metus eu molestie tristique. Nulla id aliquam purus. Nulla tincidunt augue aliquet odio fringilla, laoreet egestas ligula tempus. Morbi imperdiet quam sed dictum suscipit. Mauris commodo tortor id pretium auctor. Nam nisl quam, sollicitudin eget massa ac, vestibulum tincidunt purus. Sed massa enim, tempus in auctor viverra, accumsan nec ante. </p>
                                     <p>4 Donec ac blandit ante. Vivamus efficitur id ipsum vitae posuere. In vel tincidunt est. Donec ullamcorper dapibus justo et tempus. Aliquam erat volutpat. Suspendisse potenti. Etiam eleifend sit amet lacus euismod tincidunt. Nulla tincidunt sapien vitae neque dignissim, eget egestas mi porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam odio.</p>
                               </div>
               
                        </div>
                  </Section>
                  
            </main>         
         </>
      )
}




export const getServerSideProps: GetServerSideProps = async ({params}) => {

      try{
            const result = await api.get('/search', {
                  params: {r : params.id},
            })
      
            const { data } = result
           
            if (data.length === 0 || !data) {
                  throw new Error();
            }
            
            return {
                  props: {
                        data
                  }
            }

      } catch (e) {
        
            return {
                  notFound: true,
            }
      }

}


export default Recipe