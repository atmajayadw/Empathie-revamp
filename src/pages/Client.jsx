import Navbar from '../pages/Navbar.jsx'
import Client_list from '../component/Client/Client_list.jsx'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from "react";

function Client() {
      const location = useLocation(); // 1. Run ini pertama kali untuk akses location / State

      //2-A. Buat fungsi untuk ambil State 
      const getCategory = () => {
        const selectedCategory = location.state?.category; 

        //3. Kembalikan nilai state
        return selectedCategory;
      };
  
      // Pengganti ComponentDidMount () agar fungsi dijalankan 1x saja
      const effectRun = useRef(false); 
      useEffect(() => {
          if (!effectRun.current) {
            const category = getCategory();  // 2-B Jalankan fungsinya
            setCategory(category);  // 4. Menyimpan nilai selectedCategory ke dalam state
          effectRun.current = true; 
          }
      }, []); 

      // 5. Tersimpan kedalam state selectedCategory
      const [selectedCategory, setCategory] = useState(null);

    return (
      <>

        <div>
            <Navbar/>
            <Client_list/>
            <h1>{selectedCategory}</h1>
        </div>
      </>
    )
  }
  
  export default Client