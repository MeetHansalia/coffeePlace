
import "../styles/global.css"

function MyApp({Component, pageProps}){
    return(
        <div>
          <Component {...pageProps}/>
          <footer>
            <p>@2023 Meet Hansalia</p>
          </footer>
        </div>
    )
}

export default MyApp