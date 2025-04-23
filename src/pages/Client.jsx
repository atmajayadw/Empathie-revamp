import Navbar from '../pages/Navbar.jsx'
import Client_list from '../component/Client/Client_list.jsx'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from "react";

function Client() {
      const location = useLocation(); // 1.Mengambil informasi tentang URL saat ini (termasuk state) dari react-router-dom

      const [selectedCategory, setCategory] = useState(null); //2. Membuat state lokal untuk menyimpan kategori yang dipilih. Awalnya diset null. selectedCategory = nilai sekarang, setCategory = function untuk mengubah nilainya


      //3. Function untuk mengambil kategori dari location.state 
      const getCategory = () => {
        const selectedCategory = location.state?.category; 
        return selectedCategory;
      };
  
      // Pengganti ComponentDidMount () agar fungsi dijalankan 1x saja
      const effectRun = useRef(false); 
      useEffect(() => {
          if (!effectRun.current) {
            const category = getCategory();  // 4. Panggil fungsi getCategory() untuk ambil nilai dari location
            setCategory(category);  // 5. Ubah state selectedCategory menjadi nilai category yang tadi diambil dari location
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