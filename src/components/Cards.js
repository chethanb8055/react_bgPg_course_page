import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = ({courses,category}) => {
    //here defined bcz it have all component compared to card component
    const[likedCourses,setLikedCourses] =useState([])
    const getCourses =()=>{
        let allCourses =[];
        if(category=="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course)
                })
            })
            return allCourses
        }else{
            //in this case specific category is passing
            return courses[category]
        }
    
    }
    
  return (
    <div className='flex  flex-wrap justify-center gap-4 mb-4'>
        {/* getCourse make depend on category */}
        {getCourses().map((courses)=>{
            return <Card course={courses} key={courses.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })}
    </div>
  )
}

export default Cards