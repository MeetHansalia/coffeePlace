import Head from "next/head";
import styles from "../styles/Home.module.css"
import Banner from "@/components/banner";

export default function Home(){
    
    const handleOnBannerBtnClick = ()=>{
        console.log("hi banner button")
    }
    return(
        <div className={styles.container}>
           <Head>
             <title>Coffee Place</title>
             
           </Head>
           
           <main className={styles.main}>
              
              <Banner buttonText ="View stores nearby" handleOnClick={handleOnBannerBtnClick}/>
           </main>
           
           
        </div>
    )
}