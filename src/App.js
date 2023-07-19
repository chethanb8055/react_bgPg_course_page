// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import {apiUrl,filterData} from "./data"

import { toast } from 'react-toastify';
import Cards from './components/Cards';




function App(){
  const [courses,setCourses]=useState([])
  const [loading,setLoading]=useState(true)
  const [category,setCategory] =useState(filterData[0].title)
  
  useEffect(()=>{
   setLoading(true)
    async function fetchData(){
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
     
        // console.log(res.status)
        setCourses(output.data)
      }catch(error){
         toast.error("something went wrong")
      }
      setLoading(false)
    }
    fetchData() 
  },[])
  return(
      <>
        <div className='min-h-screen flex flex-col'>
          <div>
            <Navbar/>
          </div>
          <div className='bg-bgDark2'>
          <div>
            <Filter 
              filterData={filterData}
              category={category}
              setCategory ={setCategory}
            />
          </div>
          <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap '>
                {
                  loading ?(<Spinner/>):(<Cards courses={courses}   category={category}/>)
                }
          </div>
            
          </div>
        </div>
      </>
  )
}

export default App;
