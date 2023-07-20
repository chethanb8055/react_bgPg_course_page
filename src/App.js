// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import { apiUrl, filterData } from "./data"

import { toast } from 'react-toastify';
import Cards from './components/Cards';
import img1 from './404-broken-url.png'




function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorPage, setErrorPage] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        setErrorPage(false)
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(res.status)
        setCourses(output.data)
      } catch (error) {
        toast.error("something went wrong")
        setErrorPage(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className='min-h-screen flex flex-col bg-bgDark2'>
        <div>
          <Navbar />
        </div>
        <div className='bg-bgDark2'>
          <div>
            <Filter
              filterData={filterData}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap'>
            {loading ? (
              <Spinner />
            ) : errorPage ? (
              <img src={img1} />
            ) : (
              <Cards courses={courses} category={category} />
            )}
          </div>


        </div>
      </div>
    </>
  )
}

export default App;
