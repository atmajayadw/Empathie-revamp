import Navbar from '../pages/Navbar.jsx'
import Client_list from '../component/Client/Client_list.jsx'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from "react";

function Client() {
      const location = useLocation(); 

      const [selectedCategory, setCategory] = useState(null); 

      const getCategory = () => {
        const selectedCategory = location.state?.category; 
        return selectedCategory;
      };
  
      
      const effectRun = useRef(false); 
      useEffect(() => {
          if (!effectRun.current) {
            const category = getCategory(); 
            setCategory(category);  
          effectRun.current = true; 
          }
      }, []); 

    return (
      <>

        <div>
            <Navbar/>
            <Client_list category={selectedCategory}/>
        </div>
      </>
    )
  }
  
  export default Client