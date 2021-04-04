import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Section from '../components/Section/Section'
import FadeInDiv from '../components/FadeInDiv/FadeInDiv'
import Card from '../components/Card/Card'

import styles from '../styles/pages/Home.module.scss'



const Home = () => {

  return (
    <>
      <Head>
        <title>Home - BootCooks</title>
      </Head>

      <main>
      
        <div className={styles.image}>
        <Image src='/images/home/pasta.jpg'layout="responsive" width={3591} height={1825} />
        </div>
        
        <div className={styles.imageColor}>
          <h2>Inspiring <br />
          Food lovers <br /> 
          From anywhere</h2>
        </div>

        
        <Section
        title='Our Philosophy'
        className={styles.firstSection}>
            <div className={styles.grid1}>
                  <div className={styles.color1}></div>
                  <div className={styles.color2}></div>
                  <div className={styles.color3}></div>
                  <FadeInDiv className={styles.item1}>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod magna in volutpat congue. Integer maximus vestibulum arcu, at lacinia augue hendrerit pellentesque. Nunc elementum sem magna, ut scelerisque lorem ullamcorper ut. In ut lacinia velit. Ut libero orci, vestibulum ac sem in, placerat tempus metus. Sed faucibus ex augue, in hendrerit mauris finibus in. Donec eget nunc a erat porta fermentum vitae a sapien. Nunc elementum sem magna, ut scelerisque lorem ullamcorper ut. In ut lacinia velit. Ut libero orci, vestibulum ac sem in, placerat tempus metus. Sed faucibus ex augue, in hendrerit mauris finibus in. Donec eget nunc a erat porta fermentum vitae a sapien.</p>
                  </FadeInDiv>
                  <FadeInDiv className={styles.item2}>
                    <p>Aenean sed justo mollis, gravida nisi sed, consequat metus. Praesent accumsan ante ut dui porttitor, et placerat turpis venenatis. Duis eu massa non tortor vehicula pretium. Pellentesque sagittis, tellus vel eleifend condimentum, sem magna hendrerit tellus, sit amet ornare risus nunc id nibh. Donec lobortis dapibus dolor, eu vulputate enim ultricies a. Nullam efficitur, massa eu ultrices iaculis, eros ante lobortis leo, ut laoreet mi tortor a neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nunc elementum sem magna, ut scelerisque lorem ullamcorper ut. In ut lacinia velit. Ut libero orci, vestibulum ac sem in, placerat tempus metus. Sed faucibus ex augue, in hendrerit mauris finibus in. Donec eget nunc a erat porta fermentum vitae a sapien.</p>
                  </FadeInDiv>
                  <FadeInDiv className={styles.item3}>
                    <p>Cras sit amet ante eget mi vulputate ultrices. Aenean sed lacus non turpis molestie dignissim nec ut magna. Duis vitae vehicula ex, eget interdum quam. Vestibulum tempus pretium risus, vitae dignissim nulla tincidunt quis. Sed ut mollis nibh. Morbi maximus tellus quis arcu volutpat, et maximus mi pharetra. Pellentesque rutrum sagittis ex, quis maximus orci. Nullam nisl leo, pharetra quis nisl ac, tincidunt elementum enim.</p>
                  </FadeInDiv>
            </div>
        </Section>

        <Section
        title='Our Top Products'>
            <div className={styles.grid2}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <Card 
                  image='/images/shop/lemon.jpg'
                  title='Sicilian Lemons'
                  description='Fusce imperdiet augue at efficitur suscipit. Mauris tempus fringilla magna, nec sollicitudin tellus lus.'>
                  </Card>
                  
                  <Card 
                  image='/images/shop/pepper.jpg'
                  title='Calabrian chili Peppers'
                  description='Sed tincidunt elit ut finibus dapibus. Praesent vel sem dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla nisi. Sed scelerisque mauris dolor, id dignissim sapien laoreet vitae. '>
                  </Card>
                  <Card 
                  image='/images/shop/cherry.jpg'
                  title="Vignola Cherries"
                  description='Nunc interdum, arcu sit amet hendrerit vulputate, odio est blandit est, vitae fermentum diam lectus et elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla nisi.'>
                  </Card>   
            </div>
        </Section>
      </main>
    </>
  )
}


export default Home