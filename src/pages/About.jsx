import Navbar from '../pages/Navbar.jsx'
import Hero_About from '../component/About/Hero_About.jsx'
import Content_About from '../component/About/Content_About.jsx'
import Footer from '../component/Footer.jsx';

function About() {
  
    return (
      <>
        <div>
          <Navbar/>
          <Hero_About/>  
          <Content_About/>     
          <Footer/>
        </div>
      </>
    )
  }
  
  export default About