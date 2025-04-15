import Hero_Portfolio from '../component/Portfolio/Hero_Portfolio.jsx'
import Category_Portfolio from '../component/Portfolio/Category_Portfolio.jsx'
import Navbar from '../pages/Navbar.jsx'

function Portfolio() {
  
    return (
      <>
        <div>
            <Navbar/>
            <Hero_Portfolio/>
            <Category_Portfolio/>
        </div>
      </>
    )
  }
  
  export default Portfolio