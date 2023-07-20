// import { AiTwotoneHeart } from "react-icons/fa"
// import {  } from "react-icons";
// import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';



const Card = ({ course, likedCourses, setLikedCourses }) => {

    //store all like is unliked instarting so we have to store state of that data


    function ClickHandler() {
        if (likedCourses.includes(course.id)) {
            //it means it already liked so 
            //so we remove the liked already
            const filterCallback = (perv) => perv.filter((cid) => cid !== course.id);

            // Updating liked courses using the callback function
            setLikedCourses(filterCallback);


            toast.warning("liked removed")
        } else {
            //it mean it not liked already mean before
            if (likedCourses.length === 0) {
                //if liked is empty
                setLikedCourses([course.id])

            } else {
                //if it non-empty add prev liked and liked one
                setLikedCourses((prev) => [...prev, course.id])
              
            }
            toast.success("Liked Successfully")
        }


    }




    return (
        <>
            <div className='w-[300px] bg-bgDark bg-opacity-80 overflow-hidden rounded-md '>
                <div className='relative'>
                    <img src={course.image.url} alt={course.image.alt} />
                    <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-1 bottom-1 grid place-content-center text-red-200'>
                        <button onClick={ClickHandler}>
                            {
                                likedCourses.includes(course.id) ? <FaHeart className='text-red-600' /> : <FaHeart />
                            }
                        </button>
                    </div>

                </div>

                <div className='p-4'>
                    <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                    <p className='mt-2 text-white'>
                        {course.description.length > 100 ? `${course.description.substr(0, 100)}...` : course.description}
                    </p>
                </div>

            </div>
        </>
    )
}

export default Card;