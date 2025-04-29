import Navbar from '../pages/Navbar.jsx'
import Hero_Contact from '../component/Contact/Hero_Contact.jsx'
import Content_Contact from '../component/Contact/Content_Contact.jsx'
import Footer from '../component/Footer.jsx';

function Contact() {
  
    return (
      <>
        <div>
            <Navbar/>
            <Hero_Contact/>
            <Content_Contact/>
            <Footer/>
        </div>
      </>
    )
  }
  
  export default Contact