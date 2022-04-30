
import Heder from "../../LEYOUT/Heder";
import './HomePage.css';
import ReactLogo from './vector.svg';
const Home = ()=>{
    return (
      <>
        <Heder />




      


    


   
 

  
     <section class="box box-b bg-secondary grid-cal-2">
        <img src={ReactLogo} alt=""/>
        <div class="box-text">
            <h2 class="text-xl">WELCOME TO NEWS HUB</h2>
            <p class="text-md"> Register &#174; yourself to get daily news from famous news portal. </p>
        </div>
    </section>

    <div class="divider"></div>
    

    <footer class="footer">
        <div class="footer-container">
            <p> &copy; News Hub Company, All rights reserved.</p>
        </div>
    </footer>





        {/* <div className={classes.bgimg}>
          <div className={classes.middle}>
            <h1 id="MainFont">
              Welcom To NewsHub   
            </h1>

            <p className={classes.paragraph}>
              Please Register your self to get daily news from famouse news
              Portal
            </p>
          </div>
        </div> */}
      </>
    );
}
export default Home;