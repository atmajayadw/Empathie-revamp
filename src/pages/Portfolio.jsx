import Hero_Portfolio from '../component/Portfolio/Hero_Portfolio.jsx'
import Category_Portfolio from '../component/Portfolio/Category_Portfolio.jsx'
import Navbar from '../pages/Navbar.jsx'
import Footer from '../component/Footer.jsx';
function Portfolio() {
  
    return (
      <>
        <div>
            <Navbar/>
            <Hero_Portfolio/>
            <Category_Portfolio/>
            <Footer/>
        </div>
      </>
    )
  }
  
  export default Portfolio